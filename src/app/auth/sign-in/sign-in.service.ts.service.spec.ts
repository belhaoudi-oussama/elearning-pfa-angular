import { TestBed } from '@angular/core/testing';

import { SignIn.Service.TsService } from './sign-in.service.ts.service';

describe('SignIn.Service.TsService', () => {
  let service: SignIn.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignIn.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
