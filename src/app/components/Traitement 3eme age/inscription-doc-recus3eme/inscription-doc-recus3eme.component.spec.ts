import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDocRecus3emeComponent } from './inscription-doc-recus3eme.component';

describe('InscriptionDocRecus3emeComponent', () => {
  let component: InscriptionDocRecus3emeComponent;
  let fixture: ComponentFixture<InscriptionDocRecus3emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDocRecus3emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDocRecus3emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
