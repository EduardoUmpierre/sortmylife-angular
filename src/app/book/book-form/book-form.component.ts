import { Component, OnInit } from '@angular/core';
import { Book } from 'app/book/book';
import { BooksService } from 'app/book/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit {
    editing = false;
    id: number;
    book: Book;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BooksService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        if (isNaN(this.id)) {
            this.book = new Book();
        } else {
            this.editing = true;
            this.book = Object.assign({}, this.service.getOneById(this.id));
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
        this.service.update(this.book);

        this.router.navigate(['inicio']);
    }

    newBook() {
        this.service.add(this.book);

        this.router.navigate(['inicio']);
    }
}