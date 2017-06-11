import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MovieService} from "./movie.service";
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieFavoriteComponent } from './movie-favorite/movie-favorite.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MovieFavoriteService} from "./movie-favorite/movie-favorite.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      MovieFormComponent,
      MovieFavoriteComponent,
      MovieListComponent
  ],
  providers:[
      MovieService,
      MovieFavoriteService
  ]
})
export class MovieModule { }
