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
    errorMessage: any;

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
            this.service.getOneById(this.id).subscribe(
                book => this.book = Object.assign({}, book),
                error => this.errorMessage = error
            );
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
        this.service.update(this.book).subscribe(
            book => {
                console.log(book);
            },
            error => this.errorMessage = error
        );

        this.router.navigate(['livro/' + this.book.id]);
    }

    newBook(): void {
        this.service.create(this.book).subscribe(
            book => {
                console.log(book);
            },
            error => this.errorMessage = error
        );

        this.router.navigate(['inicio']);
    }
}
