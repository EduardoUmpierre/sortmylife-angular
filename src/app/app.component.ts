import { Component } from '@angular/core';

import { Book } from 'app/book/book';
import {Movie} from "./movie/movie";

import { BooksService } from 'app/book/books.service';
import { MovieService } from "./movie/movie.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    books: Book[];
    movie: Movie[];

    constructor (private booksService: BooksService,
                    private movieService: MovieService
    ) {
        this.books = this.booksService.getAll();
        this.movie = this.movieService.getAllMovie();
    }
}
