import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Series } from './series';

@Injectable()
export class SeriesService {
    series: Series[] = [];

    constructor(private router: Router, private http: Http) {}

    getSeries() {
        return this.series;
    }

    // Retorna todas séries
    getAll(): Observable<Series[]> {
        return this.http.get('http://localhost:8888/series')
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Retorna uma série
    getOneById(id: number): Observable<Series> {
        return this.http.get('http://localhost:8888/series/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Insere uma série
    create(serie: Series): Observable<Series> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8888/series', JSON.stringify(serie), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Atualiza uma série
    update(serie: Series): Observable<Series> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.put('http://localhost:8888/series/' + serie.id, JSON.stringify(serie), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Remove uma série
    delete(id: number): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.delete('http://localhost:8888/series/' + id, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();

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
}
