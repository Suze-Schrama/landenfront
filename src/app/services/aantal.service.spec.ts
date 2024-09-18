import { TestBed } from '@angular/core/testing';

import { AantalService } from './aantal.service';

describe('AantalService', () => {
  let service: AantalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AantalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
