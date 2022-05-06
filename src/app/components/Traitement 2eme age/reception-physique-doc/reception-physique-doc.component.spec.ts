import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionPhysiqueDocComponent } from './reception-physique-doc.component';

describe('ReceptionPhysiqueDocComponent', () => {
  let component: ReceptionPhysiqueDocComponent;
  let fixture: ComponentFixture<ReceptionPhysiqueDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionPhysiqueDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionPhysiqueDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
