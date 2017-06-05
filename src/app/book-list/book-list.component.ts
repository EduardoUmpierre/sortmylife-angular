import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'app/books.service';
import { FavoriteBooksService } from 'app/favorite-books.service';
import { ReadedBooksService } from 'app/readed-books.service';
import { Book } from 'app/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
    @Input() title: string = 'Lista de livros';
    @Input() type: string;

    service: any;
    books: Book[];

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private booksService: BooksService,
        private favoriteBooksService: FavoriteBooksService,
        private readedBooksService: ReadedBooksService
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
            default: {
                this.service = this.booksService;
            }
        }

        this.books = this.service.getAll();
    }

    view(index: number) {
        this.router.navigate(['livro', index + 1]);
    }
}
