import { Component, OnInit } from '@angular/core';
import { Book } from 'app/book';
import { BooksService } from 'app/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit {
    editing = false;
    index: number;
    book: Book;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BooksService
    ) { }

    ngOnInit() {
        this.index = this.route.snapshot.params['index'];

        if (isNaN(this.index)) {
            this.book = new Book();
        } else {
            this.editing = true;
            this.book = Object.assign({}, this.service.getOneByIndex(this.index - 1));
        }
    }

    onSubmit() {
        if (this.editing) {
            this.updateBook();

            this.editing = false;
        } else {
            this.newBook();
        }
    }

    updateBook() {
        this.service.update(this.book, this.index - 1);

        this.router.navigate(['inicio']);
    }

    newBook() {
        this.service.add(this.book);

        this.router.navigate(['inicio']);
    }
}