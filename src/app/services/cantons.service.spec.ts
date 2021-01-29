import { TestBed } from '@angular/core/testing';

import { CantonsService } from './cantons.service';

describe('CantonsService', () => {
  let service: CantonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
