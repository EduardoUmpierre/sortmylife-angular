import { TestBed, inject } from '@angular/core/testing';

import {WantToReadMoviesService} from './want-to-read-movies.service';



describe('WantToReadMoviessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WantToReadMoviesService]
    });
  });

  it('should be created', inject([WantToReadMoviesService], (service: WantToReadMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
