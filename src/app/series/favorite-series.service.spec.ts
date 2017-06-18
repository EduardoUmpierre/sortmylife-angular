import { TestBed, inject } from '@angular/core/testing';

import { FavoriteSeriesService } from './favorite-series.service';

describe('FavoriteSeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteSeriesService]
    });
  });

  it('should be created', inject([FavoriteSeriesService], (service: FavoriteSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
