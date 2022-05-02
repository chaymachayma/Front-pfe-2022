import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReceptionDocComponent } from './ajouter-reception-doc.component';

describe('AjouterReceptionDocComponent', () => {
  let component: AjouterReceptionDocComponent;
  let fixture: ComponentFixture<AjouterReceptionDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReceptionDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterReceptionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
