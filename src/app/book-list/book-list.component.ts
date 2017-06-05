import { Component, OnInit } from '@angular/core';
import { BooksService } from 'app/books.service';
import { Book } from 'app/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
    books: Book[];

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private booksService: BooksService
    ) {}

    ngOnInit() {
        this.books = this.booksService.getAll();
    }

    view(index: number) {
        this.router.navigate(['livro', index + 1]);
    }
}
