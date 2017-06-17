import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app.routing.module';

import { BooksService } from './book/books.service';
import { FavoriteBooksService } from './book/favorite-books.service';
import { ReadedBooksService } from './book/readed-books.service';
import { WantToReadBooksService } from './book/want-to-read-books.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookViewComponent } from './book/book-view/book-view.component';
import { HomeComponent } from './home/home.component';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {MovieFormComponent} from './movie/movie-form/movie-form.component';
import {MovieViewComponent} from './movie/movie-view/movie-view.component';
import {FavoriteMoviesService} from './movie/favorite-movies.service';
import {ReadedMoviesService} from './movie/readed-movies.service';
import {WantToReadMoviesService} from './movie/want-to-read-movies.service';
import {MoviesService} from './movie/movies.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BookListComponent,
        BookFormComponent,
        BookViewComponent,
        HomeComponent,
        MovieListComponent,
        MovieFormComponent,
        MovieViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        BooksService,
        MoviesService,
        FavoriteBooksService,
        ReadedBooksService,
        WantToReadBooksService,
        FavoriteMoviesService,
        ReadedMoviesService,
        WantToReadMoviesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
