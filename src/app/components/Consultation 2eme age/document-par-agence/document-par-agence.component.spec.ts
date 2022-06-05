import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentParAgenceComponent } from './document-par-agence.component';

describe('DocumentParAgenceComponent', () => {
  let component: DocumentParAgenceComponent;
  let fixture: ComponentFixture<DocumentParAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentParAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentParAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
