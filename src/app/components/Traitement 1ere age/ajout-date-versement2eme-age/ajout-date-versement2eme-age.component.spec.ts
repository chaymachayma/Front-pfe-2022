import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDateVersement2emeAgeComponent } from './ajout-date-versement2eme-age.component';

describe('AjoutDateVersement2emeAgeComponent', () => {
  let component: AjoutDateVersement2emeAgeComponent;
  let fixture: ComponentFixture<AjoutDateVersement2emeAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDateVersement2emeAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDateVersement2emeAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
