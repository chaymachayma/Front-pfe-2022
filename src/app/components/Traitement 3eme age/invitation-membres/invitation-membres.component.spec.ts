import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationMembresComponent } from './invitation-membres.component';

describe('InvitationMembresComponent', () => {
  let component: InvitationMembresComponent;
  let fixture: ComponentFixture<InvitationMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationMembresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
