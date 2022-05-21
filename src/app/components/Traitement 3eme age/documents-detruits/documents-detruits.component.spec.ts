import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDetruitsComponent } from './documents-detruits.component';

describe('DocumentsDetruitsComponent', () => {
  let component: DocumentsDetruitsComponent;
  let fixture: ComponentFixture<DocumentsDetruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDetruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsDetruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
