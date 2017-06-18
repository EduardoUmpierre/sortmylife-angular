import { TestBed, inject } from '@angular/core/testing';

import { ReadedSeriesService } from './readed-series.service';

describe('ReadedSeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadedSeriesService]
    });
  });

  it('should be created', inject([ReadedSeriesService], (service: ReadedSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
