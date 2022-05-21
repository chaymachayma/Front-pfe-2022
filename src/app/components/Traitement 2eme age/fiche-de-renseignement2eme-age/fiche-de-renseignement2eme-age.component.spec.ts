import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeRenseignement2emeAgeComponent } from './fiche-de-renseignement2eme-age.component';

describe('FicheDeRenseignement2emeAgeComponent', () => {
  let component: FicheDeRenseignement2emeAgeComponent;
  let fixture: ComponentFixture<FicheDeRenseignement2emeAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDeRenseignement2emeAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDeRenseignement2emeAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
