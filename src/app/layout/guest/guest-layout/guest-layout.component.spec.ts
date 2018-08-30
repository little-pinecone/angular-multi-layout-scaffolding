import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLayoutComponent } from './guest-layout.component';

import { Component } from '@angular/core';

@Component({selector: 'app-guest-top-nav', template: ''})
class GuestTopNavComponent {}

@Component({selector: 'app-page-content', template: ''})
class PageContentComponent { }

@Component({selector: 'app-guest-footer', template: ''})
class GuestFooterComponent {}

describe('GuestLayoutComponent', () => {
  let component: GuestLayoutComponent;
  let fixture: ComponentFixture<GuestLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GuestLayoutComponent,
        GuestTopNavComponent,
        PageContentComponent,
        GuestFooterComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
