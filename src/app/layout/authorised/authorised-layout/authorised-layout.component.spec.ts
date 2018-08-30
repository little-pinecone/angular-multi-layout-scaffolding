import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedLayoutComponent } from './authorised-layout.component';

describe('AuthorisedLayoutComponent', () => {
  let component: AuthorisedLayoutComponent;
  let fixture: ComponentFixture<AuthorisedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisedLayoutComponent ]
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
