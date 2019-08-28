import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async login(username?: string, password?: string) {
    return await new Promise((resolve, reject) => {
      if (username && password) {
        resolve({ Username: username, Password: password });
      } else {
        resolve({ Username: 'null', Password: 'null' });
      }
    });
  }
}
