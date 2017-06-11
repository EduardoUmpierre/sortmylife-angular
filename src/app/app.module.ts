import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app.routing.module";

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
import { MovieComponent } from './movie/movie.component';
import {MovieService} from "./movie/movie.service";
import {MovieFavoriteService} from "./movie/movie-favorite/movie-favorite.service";
import {MovieListComponent} from "./movie/movie-list/movie-list.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BookListComponent,
        BookFormComponent,
        BookViewComponent,
        HomeComponent,
        MovieComponent,
        MovieListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        BooksService,
        FavoriteBooksService,
        ReadedBooksService,
        WantToReadBooksService,
        MovieService,
        MovieFavoriteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
