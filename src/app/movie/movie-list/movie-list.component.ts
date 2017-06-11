import {Component, Input, OnInit} from '@angular/core';

import {Movie} from "../movie";

import {MovieFavoriteService} from "../movie-favorite/movie-favorite.service";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;

  service: any;
  movies: Movie[];

  constructor (
      private movieService: MovieService,
      private movieFavoriteService: MovieFavoriteService,
  ) {}

  ngOnInit() {
    switch (this.type) {
      case 'favorite': {
        this.service = this.movieFavoriteService;
        break;
      }
      default: {
        this.service = this.movieService;
      }
    }

    this.movies = this.service.getAll();
  }

}
