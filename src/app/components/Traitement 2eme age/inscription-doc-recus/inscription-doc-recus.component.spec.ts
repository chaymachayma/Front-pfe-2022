import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDocRecusComponent } from './inscription-doc-recus.component';

describe('InscriptionDocRecusComponent', () => {
  let component: InscriptionDocRecusComponent;
  let fixture: ComponentFixture<InscriptionDocRecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDocRecusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDocRecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
