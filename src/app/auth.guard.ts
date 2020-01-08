import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthVkService} from './auth-vk.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canLogin = false;
  private adminUsers = ['216737', '49593'];

  constructor(
    private auth: AuthVkService,
    private router: Router
  ) {
    this.canLogin = !environment.production;
  }

  logout() {
    this.canLogin = false;
    this.router.navigateByUrl('/login');
  }

  checkAccess(userId: string) {
    if (this.adminUsers.includes(userId)) {
      this.canLogin = true;
      this.router.navigateByUrl('/admin/users');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  canActivate() {
    if (this.canLogin) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
