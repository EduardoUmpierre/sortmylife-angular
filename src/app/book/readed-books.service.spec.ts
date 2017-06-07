import { TestBed, inject } from '@angular/core/testing';

import { ReadedBooksService } from './readed-books.service';

describe('ReadedBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadedBooksService]
    });
  });

  it('should be created', inject([ReadedBooksService], (service: ReadedBooksService) => {
    expect(service).toBeTruthy();
  }));
});
