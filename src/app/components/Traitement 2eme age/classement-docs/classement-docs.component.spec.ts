import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementDocsComponent } from './classement-docs.component';

describe('ClassementDocsComponent', () => {
  let component: ClassementDocsComponent;
  let fixture: ComponentFixture<ClassementDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
