import { Component } from '@angular/core';
import { Book } from 'app/book';
import { BooksService } from 'app/books.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    books: Book[];
    title = 'app works!';

    constructor (private booksService: BooksService) {
        this.books = this.booksService.getAll();
    }
}
