import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthVkService {

  openDialogVK() {
    window.location.href = 'https://oauth.vk.com/authorize?' +
      'client_id=7271168&display=page&' +
      'redirect_uri=https://panoffdmirtii.github.io/mmdanceAdmin/vkhook&scope=friends&' +
      'response_type=token&v=5.103';
  }
}
