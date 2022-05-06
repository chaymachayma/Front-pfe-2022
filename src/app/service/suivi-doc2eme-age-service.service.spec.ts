import { TestBed } from '@angular/core/testing';

import { SuiviDoc2emeAgeServiceService } from './suivi-doc2eme-age-service.service';

describe('SuiviDoc2emeAgeServiceService', () => {
  let service: SuiviDoc2emeAgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviDoc2emeAgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
