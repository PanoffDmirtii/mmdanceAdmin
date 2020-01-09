import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../auth.guard';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin;

  constructor(
    private auth: AuthGuard
  ) { }

  ngOnInit() {
    this.admin = this.auth.adminSession;
  }

  onLogout() {
    this.auth.logout();
  }
}
