import { TestBed } from '@angular/core/testing';

import { SchoolRegistrationGuard } from './school-registration.guard';

describe('SchoolRegistrationGuard', () => {
  let guard: SchoolRegistrationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchoolRegistrationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
