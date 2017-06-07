import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.sass']
})
export class MovieFormComponent implements OnInit {

  movie: any = {};
  inscription: Subscription;

  constructor(
      private route: ActivatedRoute,
      private movieService: MovieService
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
        (params: any) =>{
          let id = params['id'];

          this.movie = this.movieService.getMovie(id);

          if(this.movie === null){
            this.movie = {};
          }

        }
    );
  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }

}
