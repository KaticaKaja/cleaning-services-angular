import { TestBed } from '@angular/core/testing';

import { SidebarmaincontentService } from './sidebarmaincontent.service';

describe('SidebarmaincontentService', () => {
  let service: SidebarmaincontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarmaincontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
