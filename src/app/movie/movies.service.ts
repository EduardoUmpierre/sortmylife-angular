import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './movie';

@Injectable()
export class MoviesService {
    movies: Movie[] = [];

    constructor(private router: Router, private http: Http) {}

    // Retorna todos os filmes
    getAll(): Observable<Movie[]> {
        return this.http.get('http://localhost:8888/filmes')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();

        console.log(body);

        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getTotalItems() {
        return this.movies.length;
    }

    getOneById(id: number) {
        for (const i in this.movies) {
            if (this.movies[i].id == id) {
                return this.movies[i];
            }
        }

        this.router.navigate(['inicio']);
    }

    add(movies: Movie) {
        movies.id = this.getTotalItems() + 1;
        this.movies.unshift(movies);
    }

    update(movies: Movie) {
        for (const i in this.movies) {
            if (this.movies[i].id == movies.id) {
                this.movies[i] = movies;
            }
        }
    }

    delete(id: number) {
        for (const i in this.movies) {
            if (this.movies[i].id == id) {
                this.movies.splice(parseInt(i, 0), 1);
            }
        }
    }
}
