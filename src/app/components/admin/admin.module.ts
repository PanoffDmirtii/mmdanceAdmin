import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UsersComponent} from './users/users.component';
import {MailerComponent} from './mailer/mailer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {UsersPipe} from './shared/users.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    UserInfoComponent,
    MailerComponent,
    PageNotFoundComponent,
    HeaderComponent,
    UsersPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
  ],
})
export class AdminModule {
}
