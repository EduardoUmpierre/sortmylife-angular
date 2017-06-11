import { Injectable } from '@angular/core';

import {Movie} from "../movie";

@Injectable()
export class MovieFavoriteService {
  favoriteMovies: Movie[] = [];

  constructor() { }

  getAll() {
    return this.favoriteMovies;
  }

  hasOneById(id: number) {
    for (const i in this.favoriteMovies) {
      if (this.favoriteMovies[i].id == id) {
        return true;
      }
    }

    return false;
  }

  add(movie: Movie) {
    this.favoriteMovies.unshift(movie);
  }

  delete(id: number) {
    for (const i in this.favoriteMovies) {
      if (this.favoriteMovies[i].id == id) {
        this.favoriteMovies.splice(parseInt(i, 0), 1);
      }
    }
  }
}
