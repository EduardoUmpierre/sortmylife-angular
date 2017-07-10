import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/movie/movie';
import { MoviesService } from 'app/movie/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.sass']
})
export class MovieFormComponent implements OnInit {
    editing = false;
    id: number;
    movie: Movie;
    errorMessage: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MoviesService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        if (isNaN(this.id)) {
            this.movie = new Movie();
        } else {
            this.editing = true;
            this.service.getOneById(this.id).subscribe(
                movie => this.movie = Object.assign({}, movie),
                error => this.errorMessage = error
            )
        }
    }

    onSubmit() {
        if (this.editing) {
            this.updateMovie();

            this.editing = false;
        } else {
            this.newMovie();
        }
    }

    updateMovie() {
        this.service.update(this.movie).subscribe(
            movie => {
                console.log(movie);
            },
            error => this.errorMessage = error
        );

        this.router.navigate(['filme/' + this.movie.id]);
    }

    newMovie() {
        this.service.create(this.movie).subscribe(
            movie => {
                console.log(movie);
            },
            error => this.errorMessage = error
        );

        this.router.navigate(['inicio']);
    }
}
