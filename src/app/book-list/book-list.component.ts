import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'app/books.service';
import { FavoriteBooksService } from 'app/favorite-books.service';
import { ReadedBooksService } from 'app/readed-books.service';
import { WantToReadBooksService } from 'app/want-to-read-books.service';
import { Book } from 'app/book';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
    @Input() title: string;
    @Input() type: string;

    service: any;
    books: Book[];

    constructor (
        private booksService: BooksService,
        private favoriteBooksService: FavoriteBooksService,
        private readedBooksService: ReadedBooksService,
        private wantToReadBooksService: WantToReadBooksService
    ) {}

    ngOnInit() {
        switch (this.type) {
            case 'favorite': {
                this.service = this.favoriteBooksService;
                break;
            }
            case 'readed': {
                this.service = this.readedBooksService;
                break;
            }
            case 'wantToRead': {
                this.service = this.wantToReadBooksService;
                break;
            }
            default: {
                this.service = this.booksService;
            }
        }

        this.books = this.service.getAll();
    }
}
