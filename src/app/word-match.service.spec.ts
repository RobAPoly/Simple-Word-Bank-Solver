import { TestBed } from '@angular/core/testing';

import { WordMatchService } from './word-match.service';

describe('WordMatchService', () => {
  let service: WordMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
