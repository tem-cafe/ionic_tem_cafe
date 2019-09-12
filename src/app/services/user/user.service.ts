import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: Storage,
    public api: ApiService,
  ) { }

  register(userEmail: string, userPassword: string) {
    return new Promise((resolve, reject) => {
      this.api.post('usuario/', { email: userEmail, password: userPassword })
        .subscribe((data: any) => {
          console.log('Response register: ', data);
          resolve(this.storage.set('token', data.token));
        }, (error: any) => {
          console.error('user.service.ts -> register() -> api.post()', error);
          reject(error);
        });
    });
  }

}
