import { Component } from '@angular/core';

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
    
}
