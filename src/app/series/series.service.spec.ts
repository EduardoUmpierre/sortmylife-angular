import { TestBed, inject } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService]
    });
  });

  it('should be created', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
