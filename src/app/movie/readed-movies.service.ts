import { Injectable } from '@angular/core';

import {Movie} from './movie';

@Injectable()
export class ReadedMoviesService {
    readedMovies: Movie[] = [];

    constructor() { }

    getAll() {
        return this.readedMovies;
    }

    hasOneById(id: number) {
        for (const i in this.readedMovies) {
            if (this.readedMovies[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(movie: Movie) {
        this.readedMovies.unshift(movie);
    }

    delete(id: number) {
        for (const i in this.readedMovies) {
            if (this.readedMovies[i].id == id) {
                this.readedMovies.splice(parseInt(i, 0), 1);
            }
        }
    }
}
