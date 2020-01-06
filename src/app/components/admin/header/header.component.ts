import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../auth.guard';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthGuard
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logout();
  }
}
