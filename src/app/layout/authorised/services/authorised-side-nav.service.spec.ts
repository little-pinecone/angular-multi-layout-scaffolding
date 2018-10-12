import { TestBed, inject } from '@angular/core/testing';

import { AuthorisedSideNavService } from './authorised-side-nav.service';

describe('AuthorisedSideNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorisedSideNavService]
    });
  });

  it('should be created', inject([AuthorisedSideNavService], (service: AuthorisedSideNavService) => {
    expect(service).toBeTruthy();
  }));
});
