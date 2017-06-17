import { Injectable } from '@angular/core';

import { Movie } from './movie';

@Injectable()
export class WantToReadMoviesService{
    wantToReadMovie: Movie[] = [];

    constructor() { }

    getAll() {
        return this.wantToReadMovie;
    }

    hasOneById(id: number) {
        for (const i in this.wantToReadMovie) {
            if (this.wantToReadMovie[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(movie: Movie) {
        this.wantToReadMovie.unshift(movie);
    }

    delete(id: number) {
        for (const i in this.wantToReadMovie) {
            if (this.wantToReadMovie[i].id == id) {
                this.wantToReadMovie.splice(parseInt(i, 0), 1);
            }
        }
    }
}
