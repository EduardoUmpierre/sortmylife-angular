import { Component, OnInit } from '@angular/core';

import { FavoriteBooksService } from '../book/favorite-books.service';
import { FavoriteMoviesService } from '../movie/favorite-movies.service';
import { FavoriteSeriesService } from '../series/favorite-series.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    favoriteBookService: FavoriteBooksService = this.favoriteBooksService;
    favoriteMovieService: FavoriteMoviesService = this.favoriteMoviesService;

    constructor(
        private favoriteBooksService: FavoriteBooksService,
        private favoriteMoviesService: FavoriteMoviesService,
        private favoriteSeriesService: FavoriteSeriesService
    ) { }

    ngOnInit() {
    }

}
