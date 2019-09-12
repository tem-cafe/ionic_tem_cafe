import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private storage: Storage,
    private api: ApiService
  ) { }

  async login(userEmail: string, userPassword: string) {
    return await new Promise((resolve, reject) => {
      this.api.post('login/', { email: userEmail, password: userPassword })
        .subscribe((data: any) => {
          resolve(this.storage.set('token', data.token));
          resolve(this.storage.set('name', data.name));
          resolve(this.storage.set('email', data.email));
        }, (error: any) => {
          reject(error);
        });
    });
  }

  async logout() {
    return await new Promise((resolve, reject) => {
      try {
        resolve(this.storage.remove('token'));
        resolve(this.storage.remove('name'));
        resolve(this.storage.remove('email'));
      } catch (error) {
        reject(error);
      }
    });
  }

  async isLogged() {
    return await this.storage.get('token');
  }

}
