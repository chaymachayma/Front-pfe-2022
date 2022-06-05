import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralisationDemandesComponent } from './centralisation-demandes.component';

describe('CentralisationDemandesComponent', () => {
  let component: CentralisationDemandesComponent;
  let fixture: ComponentFixture<CentralisationDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralisationDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralisationDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
