import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPoucentage1Component } from './chart-poucentage1.component';

describe('ChartPoucentage1Component', () => {
  let component: ChartPoucentage1Component;
  let fixture: ComponentFixture<ChartPoucentage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPoucentage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPoucentage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
