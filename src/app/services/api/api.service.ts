import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public API_URL = 'https://api-tem-cafe.herokuapp.com/';
  // private API_URL = 'http://localhost:3000';

  constructor(
    public storage: Storage
  ) { }

  async getHeader() {
    const data = await this.storage.get('token');
    return {
      headers: {
        Authorization: 'Bearer ' + (data || '')
      }
    };
  }
}
