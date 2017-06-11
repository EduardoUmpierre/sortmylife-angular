import { Component, OnInit } from '@angular/core';

import { FavoriteBooksService } from 'app/book/favorite-books.service';
import {MovieFavoriteService} from "../movie/movie-favorite/movie-favorite.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    favoriteBookService: FavoriteBooksService = this.favoriteBooksService;
    favoriteMovieService: MovieFavoriteService = this.movieFavoriteService;

    constructor(
        private favoriteBooksService: FavoriteBooksService,
        private movieFavoriteService: MovieFavoriteService
    ) { }

    ngOnInit() {
    }

}
