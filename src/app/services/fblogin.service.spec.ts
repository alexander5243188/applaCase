import { TestBed } from '@angular/core/testing';

import { FbloginService } from './fblogin.service';

describe('FbloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbloginService = TestBed.get(FbloginService);
    expect(service).toBeTruthy();
  });
});
