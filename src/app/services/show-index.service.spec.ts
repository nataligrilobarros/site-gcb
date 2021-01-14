import { TestBed } from '@angular/core/testing';

import { ShowIndexService } from './show-index.service';

describe('ShowIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowIndexService = TestBed.get(ShowIndexService);
    expect(service).toBeTruthy();
  });
});
