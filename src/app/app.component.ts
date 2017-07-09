import { Component } from '@angular/core';
import { Http } from  '@angular/http';

import { Book } from 'app/book/book';
import {Movie} from './movie/movie';

import { BooksService } from 'app/book/books.service';
import { MoviesService } from './movie/movies.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    books: Book[];
    movie: Movie[];

    api = [
        {
            titulo: 'JSON x XML',
            resumo: 'o duelo de dois modelos de representação de informações”',
            ano: 2012,
            genero: ['aventura', 'ação', 'ficção']
        },
        {
            titulo: 'JSON James',
            resumo: 'a história de uma lenda do velho oeste',
            ano: 2012,
            genero: ['western']
        }
    ];

    json: Object[] = [];

    constructor (private booksService: BooksService,
                 private moviesService: MoviesService,
                 http: Http
    ) {
        this.books = this.booksService.getAll();
        this.movie = this.moviesService.getAll();

        http.get('http://base-template.squarespace.com/blog/?format=json-pretty')
            .map( result => result.json())
            .subscribe(result => {
                this.json = result;
                console.log(this.json);
            }, erro => console.log(erro));

    }
}
