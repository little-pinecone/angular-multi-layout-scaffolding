import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedLayoutComponent } from './authorised-layout.component';

import { Component } from '@angular/core';

@Component({selector: 'app-authorised-side-nav', template: ''})
class AuthorisedSideNavComponent {}

@Component({selector: 'app-authorised-top-nav', template: ''})
class AuthorisedTopNavComponent {}

@Component({selector: 'app-page-content', template: ''})
class PageContentComponent { }

describe('AuthorisedLayoutComponent', () => {
  let component: AuthorisedLayoutComponent;
  let fixture: ComponentFixture<AuthorisedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorisedLayoutComponent,
        AuthorisedSideNavComponent,
        AuthorisedTopNavComponent,
        PageContentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
