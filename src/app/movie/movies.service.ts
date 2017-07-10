import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

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

    // Retorna todos os filmes
    getOneById(id: number): Observable<Movie> {
        return this.http.get('http://localhost:8888/filme/' + id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    // Insere um filme
    create(movie: Movie): Observable<Movie> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8888/filme', JSON.stringify(movie), options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    // Atualiza um filme
    update(movie: Movie): Observable<Movie> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('http://localhost:8888/filme/' + movie.id, JSON.stringify(movie), options)
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

    delete(id: number) {
        for (const i in this.movies) {
            if (this.movies[i].id == id) {
                this.movies.splice(parseInt(i, 0), 1);
            }
        }
    }
}
