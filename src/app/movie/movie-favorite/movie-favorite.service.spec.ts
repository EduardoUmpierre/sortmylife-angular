import { TestBed, inject } from '@angular/core/testing';

import { MovieFavoriteService } from './movie-favorite.service';

describe('MovieFavoriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieFavoriteService]
    });
  });

  it('should be created', inject([MovieFavoriteService], (service: MovieFavoriteService) => {
    expect(service).toBeTruthy();
  }));
});
