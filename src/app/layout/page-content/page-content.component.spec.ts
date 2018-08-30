import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageContentComponent } from './page-content.component';

describe('PageContentComponent', () => {
  let component: PageContentComponent;
  let fixture: ComponentFixture<PageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContentComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
