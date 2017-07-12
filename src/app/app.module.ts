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
import {SeriesService} from './series/series.service';
import {WantToReadSeriesService} from './series/want-to-read-series.service';
import {ReadedSeriesService} from './series/readed-series.service';
import {FavoriteSeriesService} from './series/favorite-series.service';
import {SeriesViewComponent} from './series/series-view/series-view.component';
import {SeriesFormComponent} from './series/series-form/series-form.component';
import {SeriesListComponent} from './series/series-list/series-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './login/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BookListComponent,
        BookFormComponent,
        BookViewComponent,
        HomeComponent,
        LoginComponent,
        MovieListComponent,
        MovieFormComponent,
        MovieViewComponent,
        SeriesListComponent,
        SeriesFormComponent,
        SeriesViewComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        BooksService,
        MoviesService,
        SeriesService,
        FavoriteBooksService,
        ReadedBooksService,
        WantToReadBooksService,
        FavoriteMoviesService,
        ReadedMoviesService,
        WantToReadMoviesService,
        FavoriteSeriesService,
        ReadedSeriesService,
        WantToReadSeriesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
