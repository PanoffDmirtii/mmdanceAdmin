import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthVkService {

  openDialogVK() {
    window.location.href = environment.API_VK_AUTH;
  }
}
