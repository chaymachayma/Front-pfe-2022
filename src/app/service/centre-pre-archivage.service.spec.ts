import { TestBed } from '@angular/core/testing';

import { CentrePreArchivageService } from './centre-pre-archivage.service';

describe('CentrePreArchivageService', () => {
  let service: CentrePreArchivageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrePreArchivageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
