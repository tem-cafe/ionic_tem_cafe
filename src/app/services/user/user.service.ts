import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: Storage
  ) { }

  async login(username?: string, password?: string) {
    return await new Promise((resolve, reject) => {
      if (username && password) {
        try {
          resolve(this.storage.set('token', '1234'));
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
