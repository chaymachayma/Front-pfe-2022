import { TestBed } from '@angular/core/testing';

import { CentreArchivesService } from './centre-archives.service';

describe('CentreArchivesService', () => {
  let service: CentreArchivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreArchivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
