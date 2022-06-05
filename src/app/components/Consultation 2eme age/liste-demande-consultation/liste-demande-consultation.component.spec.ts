import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeConsultationComponent } from './liste-demande-consultation.component';

describe('ListeDemandeConsultationComponent', () => {
  let component: ListeDemandeConsultationComponent;
  let fixture: ComponentFixture<ListeDemandeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
