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
            this.movie = Object.assign({}, this.service.getOneById(this.id));
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
        this.service.update(this.movie);

        this.router.navigate(['inicio']);
    }

    newMovie() {
        this.service.add(this.movie);

        this.router.navigate(['inicio']);
    }
}