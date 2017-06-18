import { TestBed, inject } from '@angular/core/testing';

import { WantToReadSeriesService } from './want-to-read-series.service';

describe('WantToReadSeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WantToReadSeriesService]
    });
  });

  it('should be created', inject([WantToReadSeriesService], (service: WantToReadSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
