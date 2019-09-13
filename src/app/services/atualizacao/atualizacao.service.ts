import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AtualizacaoService {

  constructor(
    private api: ApiService
  ) { }

  verificarAtualizacao() {
    return this.api.get(`/verificarAtt/${this.api.VERSAO}`);
  }
}
