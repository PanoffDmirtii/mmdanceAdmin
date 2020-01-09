import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {AuthGuard} from './auth.guard';
import {MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import {VkHookComponent} from './components/auth/vk-hook/vk-hook.component';
import {NoAccessComponent} from './components/auth/no-access/no-access.component';


const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'vkhook', component: VkHookComponent},
  {path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./components/admin/admin.module').then(mod => mod.AdminModule)},
  {path: 'no-access', component: NoAccessComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    VkHookComponent
  ],
  imports: [RouterModule.forRoot(routes), MatButtonModule, MatProgressSpinnerModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
