import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TemCafeModel } from 'src/app/models/TemCafe.model';

@Injectable({
  providedIn: 'root'
})
export class TemCafeService {

  constructor(
    private apiService: ApiService
  ) { }

  async get() {
    return await new Promise((resolve, reject) => {
      this.apiService.get('tem-cafe')
        .subscribe((data: TemCafeModel) => {
          resolve(data);
        }, (error: any) => {
          reject(error);
        });
    });
  }

  async post(body: TemCafeModel) {
    return await new Promise((resolve, reject) => {
      this.apiService.post('tem-cafe', body)
        .subscribe((data: TemCafeModel) => {
          resolve(data);
        }, (error: any) => {
          reject(error);
        });
    });
  }

}
