import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: Storage,
    public api: ApiService
  ) { }

  async login(userEmail?: string, userPassword?: string) {
    const body = {
      email: userEmail,
      password: userPassword
    };

    return await new Promise((resolve, reject) => {
      this.api.post('login/', body)
        .subscribe((data: any) => {
          console.log('Response login: ', data);
          resolve(this.storage.set('token', data.Token));
        }, error => {
          reject(error);
        });
    });
  }

  async logout() {
    return await new Promise((resolve, reject) => {
      try {
        resolve(this.storage.remove('token'));
      } catch (error) {
        reject(error);
      }
    });
  }

  async isLogged() {
    return this.storage.get('token');
  }
}
