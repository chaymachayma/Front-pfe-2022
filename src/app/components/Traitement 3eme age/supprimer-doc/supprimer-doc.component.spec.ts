import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerDocComponent } from './supprimer-doc.component';

describe('SupprimerDocComponent', () => {
  let component: SupprimerDocComponent;
  let fixture: ComponentFixture<SupprimerDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
