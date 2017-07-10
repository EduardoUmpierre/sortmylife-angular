import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'app/movie/movies.service';
import { FavoriteMoviesService } from 'app/movie/favorite-movies.service';
import { ReadedMoviesService } from 'app/movie/readed-movies.service';
import { WantToReadMoviesService } from 'app/movie/want-to-read-movies.service';
import { Movie } from 'app/movie/movie';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
    @Input() title: string;
    @Input() type: string;

    errorMessage: any;
    service: any;
    movies: Movie[];

    constructor (
        private moviesService: MoviesService,
        private favoriteMoviesService: FavoriteMoviesService,
        private readedMoviesService: ReadedMoviesService,
        private wantToReadMoviesService: WantToReadMoviesService
    ) {}

    ngOnInit() {
        switch (this.type) {
            case 'favorite': {
                this.service = this.favoriteMoviesService;
                break;
            }
            case 'readed': {
                this.service = this.readedMoviesService;
                break;
            }
            case 'wantToRead': {
                this.service = this.wantToReadMoviesService;
                break;
            }
            default: {
                this.service = this.moviesService;
            }
        }

        this.service.getAll().subscribe(
            movies => this.movies = movies,
            error => this.errorMessage = error
        );
    }
}
