import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'app/movie/movie';

import { MoviesService } from '../movies.service';
import { ReadedMoviesService } from '../readed-movies.service';
import { FavoriteMoviesService } from '../favorite-movies.service';
import { WantToReadMoviesService } from '../want-to-read-movies.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.sass']
})
export class MovieViewComponent implements OnInit {
    id: number;
    movie: Movie;
    readed: boolean;
    favorite: boolean;
    wantToRead: boolean;
    errorMessage: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MoviesService,
        private readedMoviesService: ReadedMoviesService,
        private favoriteMoviesService: FavoriteMoviesService,
        private wantToReadMoviesService: WantToReadMoviesService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.service.getOneById(this.id).subscribe(
                movie => this.movie = movie,
                error => this.errorMessage = error
            )
            // this.readed = this.readedMoviesService.hasOneById(this.id);
            // this.favorite = this.favoriteMoviesService.hasOneById(this.id);
            // this.wantToRead = this.wantToReadMoviesService.hasOneById(this.id);
        });
    }

    toggleReaded() {
        if (this.readed) {
            this.readedMoviesService.delete(this.id);
        } else {
            this.readedMoviesService.add(this.movie);
        }

        this.readed = !this.readed;
    }

    toggleFavorite() {
        if (this.favorite) {
            this.favoriteMoviesService.delete(this.id);
        } else {
            this.favoriteMoviesService.add(this.movie);
        }

        this.favorite = !this.favorite;
    }

    toggleWantToRead() {
        if (this.wantToRead) {
            this.wantToReadMoviesService.delete(this.id);
        } else {
            this.wantToReadMoviesService.add(this.movie);
        }

        this.wantToRead = !this.wantToRead;
    }

    delete() {
        if (this.confirm()) {
            this.service.delete(this.id);
            this.readedMoviesService.delete(this.id);
            this.favoriteMoviesService.delete(this.id);
            this.wantToReadMoviesService.delete(this.id);

            this.router.navigate(['inicio']);
        }
    }

    confirm() {
        if (!confirm('Você quer deletar o livro "' + this.movie.title + '"?')) {
            return false;
        }

        return true;
    }
}
