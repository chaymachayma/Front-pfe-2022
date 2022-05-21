import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreApprobationComponent } from './lettre-approbation.component';

describe('LettreApprobationComponent', () => {
  let component: LettreApprobationComponent;
  let fixture: ComponentFixture<LettreApprobationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettreApprobationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreApprobationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
