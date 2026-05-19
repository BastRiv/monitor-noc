import { TestBed } from '@angular/core/testing';

import { PrtgService } from './prtg-service';

describe('PrtgService', () => {
  let service: PrtgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrtgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
