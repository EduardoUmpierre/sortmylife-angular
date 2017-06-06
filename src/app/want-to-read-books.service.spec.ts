import { TestBed, inject } from '@angular/core/testing';

import { WantToReadService } from './want-to-read.service';

describe('WantToReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WantToReadService]
    });
  });

  it('should be created', inject([WantToReadService], (service: WantToReadService) => {
    expect(service).toBeTruthy();
  }));
});
