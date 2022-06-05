import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDemandeConsultationComponent } from './validation-demande-consultation.component';

describe('ValidationDemandeConsultationComponent', () => {
  let component: ValidationDemandeConsultationComponent;
  let fixture: ComponentFixture<ValidationDemandeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDemandeConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDemandeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
