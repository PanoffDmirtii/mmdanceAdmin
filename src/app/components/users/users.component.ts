import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../shared/user';
import { Location } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  searchUser = '';

  constructor(
    private router: Router,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe( resp => this.users = resp);
  }

  userInfo(userId) {
    this.router.navigate(['/users', userId]);
  }
}
