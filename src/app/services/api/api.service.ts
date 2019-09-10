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
    public httpClient: HttpClient,
    public storage: Storage
  ) { }

  getHeader() {
    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    return {
      headers: {
        Authorization: 'Bearer ' + (usuario.token || '')
      }
    };
  }

  get(endpoint: string) {
    return this.httpClient.get(`${this.API_URL}/${endpoint}`);
  }

  post(endpoint: string, body: any) {
    return this.httpClient.post(`${this.API_URL}/${endpoint}`, body);
  }

}
