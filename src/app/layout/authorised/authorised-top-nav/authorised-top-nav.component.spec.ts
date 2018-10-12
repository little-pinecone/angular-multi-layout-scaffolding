import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedTopNavComponent } from './authorised-top-nav.component';

describe('AuthorisedTopNavComponent', () => {
  let component: AuthorisedTopNavComponent;
  let fixture: ComponentFixture<AuthorisedTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisedTopNavComponent ]
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
