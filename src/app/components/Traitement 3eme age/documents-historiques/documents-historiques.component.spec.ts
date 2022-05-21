import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsHistoriquesComponent } from './documents-historiques.component';

describe('DocumentsHistoriquesComponent', () => {
  let component: DocumentsHistoriquesComponent;
  let fixture: ComponentFixture<DocumentsHistoriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsHistoriquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsHistoriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
