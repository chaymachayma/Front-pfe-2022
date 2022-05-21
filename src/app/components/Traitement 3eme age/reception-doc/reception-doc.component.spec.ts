import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionDocComponent } from './reception-doc.component';

describe('ReceptionDocComponent', () => {
  let component: ReceptionDocComponent;
  let fixture: ComponentFixture<ReceptionDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
