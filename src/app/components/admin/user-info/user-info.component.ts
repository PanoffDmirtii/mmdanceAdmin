import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserInfoService} from '../../../services/user-info.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  userId;
  constructor(
    private router: ActivatedRoute,
    private userInfo: UserInfoService
  ) { }

  ngOnInit() {
    this.router.params.subscribe( p => this.userId = p.id);
    this.userInfo.getInfo(this.userId).subscribe(response => this.user = response);
  }
}
