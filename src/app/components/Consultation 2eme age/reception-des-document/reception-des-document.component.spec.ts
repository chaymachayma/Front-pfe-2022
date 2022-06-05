import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionDesDocumentComponent } from './reception-des-document.component';

describe('ReceptionDesDocumentComponent', () => {
  let component: ReceptionDesDocumentComponent;
  let fixture: ComponentFixture<ReceptionDesDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionDesDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionDesDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
