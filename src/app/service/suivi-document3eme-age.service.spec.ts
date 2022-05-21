import { TestBed } from '@angular/core/testing';

import { SuiviDocument3emeAgeService } from './suivi-document3eme-age.service';

describe('SuiviDocument3emeAgeService', () => {
  let service: SuiviDocument3emeAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviDocument3emeAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
