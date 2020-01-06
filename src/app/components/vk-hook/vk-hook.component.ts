import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthGuard} from '../../auth.guard';

@Component({
  selector: 'app-vk-hook',
  templateUrl: './vk-hook.component.html',
  styleUrls: ['./vk-hook.component.css']
})
export class VkHookComponent implements OnInit {
  userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthGuard
  ) {
  }

  ngOnInit() {
    const VKHOOK = this.activatedRoute.snapshot.fragment;
    this.getUserId(VKHOOK);
    this.auth.checkAccess(this.userId);
  }

  // params : "access_token=123445&expires_in=234234&user_id=1"
  getUserId(params: string) {
    const data = params.split('&');
    this.userId = data.filter((p) => {
      const userId = p.split('=');
      if (userId[0] === 'user_id') {
        return userId;
      }
    }).map((p) => p.split('=')[1])[0];
  }


}
