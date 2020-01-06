import { Component, OnInit } from '@angular/core';
import {AuthVkService} from '../../auth-vk.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthVkService,
  ) { }

  ngOnInit() {
  }

  onAuthVk() {
    this.auth.openDialogVK();
  }
}
