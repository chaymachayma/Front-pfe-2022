import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEnlevementComponent } from './plan-enlevement.component';

describe('PlanEnlevementComponent', () => {
  let component: PlanEnlevementComponent;
  let fixture: ComponentFixture<PlanEnlevementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanEnlevementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEnlevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
