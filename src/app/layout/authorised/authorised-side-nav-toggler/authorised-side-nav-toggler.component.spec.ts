import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedSideNavTogglerComponent } from './authorised-side-nav-toggler.component';

describe('AuthorisedSideNavTogglerComponent', () => {
  let component: AuthorisedSideNavTogglerComponent;
  let fixture: ComponentFixture<AuthorisedSideNavTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisedSideNavTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisedSideNavTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
