import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionDemandesConsultationsComponent } from './execution-demandes-consultations.component';

describe('ExecutionDemandesConsultationsComponent', () => {
  let component: ExecutionDemandesConsultationsComponent;
  let fixture: ComponentFixture<ExecutionDemandesConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionDemandesConsultationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionDemandesConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
