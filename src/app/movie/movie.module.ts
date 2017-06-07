import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MovieService} from "./movie.service";
import { MovieFormComponent } from './movie-form/movie-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieFormComponent],
  providers:[
      MovieService
  ]
})
export class MovieModule { }
