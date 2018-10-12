import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedTopNavComponent } from './authorised-top-nav.component';
import { Component } from '@angular/core';

@Component({selector: 'app-authorised-side-nav-toggler', template: ''})
class AuthorisedSideNavTogglerComponent {}

describe('AuthorisedTopNavComponent', () => {
  let component: AuthorisedTopNavComponent;
  let fixture: ComponentFixture<AuthorisedTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorisedTopNavComponent,
        AuthorisedSideNavTogglerComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisedTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
