import { TestBed } from '@angular/core/testing';

import { MaincontentService } from './maincontent.service';

describe('MaincontentService', () => {
  let service: MaincontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
