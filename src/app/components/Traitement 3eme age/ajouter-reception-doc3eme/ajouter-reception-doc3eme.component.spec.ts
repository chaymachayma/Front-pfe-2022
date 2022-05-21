import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReceptionDoc3emeComponent } from './ajouter-reception-doc3eme.component';

describe('AjouterReceptionDoc3emeComponent', () => {
  let component: AjouterReceptionDoc3emeComponent;
  let fixture: ComponentFixture<AjouterReceptionDoc3emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReceptionDoc3emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterReceptionDoc3emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
