import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MailerComponent } from './components/mailer/mailer.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { UsersPipe } from './shared/users.pipe';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule, MatListModule} from '@angular/material';

const appRoutes: Routes = [
  {path: 'mailer', component: MailerComponent},
  {path: 'users', children: [
      {path: '', component: UsersComponent, pathMatch: 'full'},
      {path: ':id', component: UserInfoComponent},
      {path: '**', component: PageNotFoundComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MailerComponent,
    UsersComponent,
    UsersPipe,
    UserInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
