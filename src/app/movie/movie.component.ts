import { Component, OnInit } from '@angular/core';

import {MovieService} from "./movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  private movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movies = this.movieService.getAllMovie();

  }

}
