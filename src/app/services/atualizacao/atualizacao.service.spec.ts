import { TestBed } from '@angular/core/testing';

import { AtualizacaoService } from './atualizacao.service';

describe('AtualizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtualizacaoService = TestBed.get(AtualizacaoService);
    expect(service).toBeTruthy();
  });
});
