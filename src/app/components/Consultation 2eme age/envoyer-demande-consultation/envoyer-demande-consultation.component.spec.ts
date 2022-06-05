import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerDemandeConsultationComponent } from './envoyer-demande-consultation.component';

describe('EnvoyerDemandeConsultationComponent', () => {
  let component: EnvoyerDemandeConsultationComponent;
  let fixture: ComponentFixture<EnvoyerDemandeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerDemandeConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerDemandeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
