import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionEtValidationComponent } from './reception-et-validation.component';

describe('ReceptionEtValidationComponent', () => {
  let component: ReceptionEtValidationComponent;
  let fixture: ComponentFixture<ReceptionEtValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionEtValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionEtValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
