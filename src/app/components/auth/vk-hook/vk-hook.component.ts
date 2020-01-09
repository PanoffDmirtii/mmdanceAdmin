import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthGuard} from '../../../auth.guard';
import {AdminService} from '../../../services/admin.service';

export interface VkResponse {
  access_token: string;
  user_id: number;
  expires_in: number;
}

@Component({
  selector: 'app-vk-hook',
  templateUrl: './vk-hook.component.html',
  styleUrls: ['./vk-hook.component.css']
})
export class VkHookComponent implements OnInit {
  vkResponseData: VkResponse = {
    access_token: '',
    user_id: 0,
    expires_in: 0
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthGuard,
  ) {
  }

  ngOnInit() {
    const VKHOOK = this.activatedRoute.snapshot.fragment;
    this.parseVkResponse(VKHOOK);
    this.auth.checkAccess(this.vkResponseData);
  }

  // params : "access_token=123445&expires_in=234234&user_id=1"
  parseVkResponse(params: string) {
    const data = params.split('&').map((item) => item.split('='));
    data.forEach((i) => {
      if (i[0] === 'access_token') {
        this.vkResponseData.access_token = i[1];
      } else if (i[0] === 'expires_in') {
        this.vkResponseData.expires_in = Number(i[1]);
      } else if (i[0] === 'user_id') {
        this.vkResponseData.user_id = Number(i[1]);
      } else {
        throw TypeError;
      }
    });
  }
}
