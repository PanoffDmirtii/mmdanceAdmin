import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthVkService} from './auth-vk.service';
import {VkResponse} from './components/auth/vk-hook/vk-hook.component';
import {AdminService} from './services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canLogin = false;
  adminSession;

  constructor(
    private auth: AuthVkService,
    private router: Router,
    private adminService: AdminService
  ) {
    // this.canLogin = !environment.production;
  }

  logout() {
    this.canLogin = false;
    this.adminSession = null;
    localStorage.clear()
    this.router.navigateByUrl('/login');
  }

  checkAccess(vkResponse: VkResponse) {
    this.adminService.getAdmins().subscribe(response => {
        response.find((admin) => {
          if (admin.user.vk_id === vkResponse.user_id) {
            this.canLogin = true;
            this.adminSession = admin;
            this.router.navigateByUrl('/admin/users');
            localStorage.setItem('token', vkResponse.access_token);
          }
        });
      }
    );
  }

  canActivate() {
    if (localStorage.getItem('token') && this.adminSession) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
