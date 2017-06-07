import { TestBed, inject } from '@angular/core/testing';

import { WantToReadBooksService } from './want-to-read-books.service';

describe('WantToReadBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WantToReadBooksService]
    });
  });

  it('should be created', inject([WantToReadBooksService], (service: WantToReadBooksService) => {
    expect(service).toBeTruthy();
  }));
});
