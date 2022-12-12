import { TestBed } from '@angular/core/testing';

import { AppISService } from './app-is.service';

describe('AppISService', () => {
  let service: AppISService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppISService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
