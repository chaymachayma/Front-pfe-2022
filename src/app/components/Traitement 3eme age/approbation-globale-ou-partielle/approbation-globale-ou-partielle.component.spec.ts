import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprobationGlobaleOuPartielleComponent } from './approbation-globale-ou-partielle.component';

describe('ApprobationGlobaleOuPartielleComponent', () => {
  let component: ApprobationGlobaleOuPartielleComponent;
  let fixture: ComponentFixture<ApprobationGlobaleOuPartielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprobationGlobaleOuPartielleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprobationGlobaleOuPartielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
