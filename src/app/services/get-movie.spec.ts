import { TestBed } from '@angular/core/testing';

import { GetMovie } from './get-movie';

describe('GetMovie', () => {
  let service: GetMovie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
