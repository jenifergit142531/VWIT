import { TestBed } from '@angular/core/testing';

import { JsonfileService } from './jsonfile.service';

describe('JsonfileService', () => {
  let service: JsonfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
