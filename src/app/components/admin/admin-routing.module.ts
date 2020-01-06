import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UsersComponent} from './users/users.component';
import {MailerComponent} from './mailer/mailer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const adminRouters: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'users/:id', component: UserInfoComponent},
      {path: 'users', component: UsersComponent},
      {path: 'mailer', component: MailerComponent},
      {path: 'rent', component: MailerComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRouters)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
