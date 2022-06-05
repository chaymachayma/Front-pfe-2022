import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionParStructuresComponent } from './reception-par-structures.component';

describe('ReceptionParStructuresComponent', () => {
  let component: ReceptionParStructuresComponent;
  let fixture: ComponentFixture<ReceptionParStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionParStructuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionParStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
