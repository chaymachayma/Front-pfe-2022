import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprobationTableauDeSyntheseComponent } from './approbation-tableau-de-synthese.component';

describe('ApprobationTableauDeSyntheseComponent', () => {
  let component: ApprobationTableauDeSyntheseComponent;
  let fixture: ComponentFixture<ApprobationTableauDeSyntheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprobationTableauDeSyntheseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprobationTableauDeSyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
