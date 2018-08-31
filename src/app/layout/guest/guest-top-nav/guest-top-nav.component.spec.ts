import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTopNavComponent } from './guest-top-nav.component';

describe('GuestTopNavComponent', () => {
  let component: GuestTopNavComponent;
  let fixture: ComponentFixture<GuestTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render menu in the top navigation', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav').textContent).toContain('LinkDisabled');
  }));
});
