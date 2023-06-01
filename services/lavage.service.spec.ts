import { TestBed } from '@angular/core/testing';

import { LavageService } from './lavage.service';

describe('LavageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LavageService = TestBed.get(LavageService);
    expect(service).toBeTruthy();
  });
});
