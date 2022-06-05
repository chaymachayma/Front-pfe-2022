import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargeDeTransfertComponent } from './decharge-de-transfert.component';

describe('DechargeDeTransfertComponent', () => {
  let component: DechargeDeTransfertComponent;
  let fixture: ComponentFixture<DechargeDeTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargeDeTransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargeDeTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
