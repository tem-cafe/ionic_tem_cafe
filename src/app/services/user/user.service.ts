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

  async login(username?: string, password?: string) {
    return await new Promise((resolve, reject) => {
      if (username && password) {
        try {
          this.api.postLogin(username, password).subscribe(data => {
            resolve(this.storage.set('token', data['token']));
          }, error => {
            reject(error);
          });
        } catch (error) {
          reject(error);
        }
      } else {
        try {
          resolve(this.storage.set('token', '0000'));
        } catch (error) {
          reject(error);
        }
      }
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
