import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreTransfertComponent } from './lettre-transfert.component';

describe('LettreTransfertComponent', () => {
  let component: LettreTransfertComponent;
  let fixture: ComponentFixture<LettreTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettreTransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
