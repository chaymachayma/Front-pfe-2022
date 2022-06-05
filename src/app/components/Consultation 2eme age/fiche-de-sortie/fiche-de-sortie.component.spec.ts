import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeSortieComponent } from './fiche-de-sortie.component';

describe('FicheDeSortieComponent', () => {
  let component: FicheDeSortieComponent;
  let fixture: ComponentFixture<FicheDeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
