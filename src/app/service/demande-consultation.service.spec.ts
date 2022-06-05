import { TestBed } from '@angular/core/testing';

import { DemandeConsultationService } from './demande-consultation.service';

describe('DemandeConsultationService', () => {
  let service: DemandeConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
