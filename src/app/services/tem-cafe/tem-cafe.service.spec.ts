import { TestBed } from '@angular/core/testing';

import { TemCafeService } from './tem-cafe.service';

describe('TemCafeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemCafeService = TestBed.get(TemCafeService);
    expect(service).toBeTruthy();
  });
});
