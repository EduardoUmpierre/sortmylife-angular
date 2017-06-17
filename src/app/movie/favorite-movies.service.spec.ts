import { TestBed, inject } from '@angular/core/testing';

import { FavoriteMoviesService } from './favorite-movies.service';

describe('FavoriteBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteMoviesService]
    });
  });

  it('should be created', inject([FavoriteMoviesService], (service: FavoriteMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
