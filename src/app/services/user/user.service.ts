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

  register(userName: string, userEmail: string, userPassword: string) {
    return new Promise((resolve, reject) => {
      this.api.post('usuario/', { name: userName, email: userEmail, password: userPassword })
        .subscribe((data: any) => {
          resolve(this.storage.set('token', data.token));
          resolve(this.storage.set('name', data.name));
          resolve(this.storage.set('email', data.email));
        }, (error: any) => {
          reject(error);
        });
    });
  }

}
