import { TestBed, inject } from '@angular/core/testing';

import { ReadedMoviesService} from './readed-movies.service';

describe('ReadedBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadedMoviesService]
    });
  });

  it('should be created', inject([ReadedMoviesService], (service: ReadedMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
