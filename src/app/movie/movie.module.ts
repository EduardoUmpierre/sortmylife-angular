import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MovieService} from "./movie.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
      MovieService
  ]
})
export class MovieModule { }
