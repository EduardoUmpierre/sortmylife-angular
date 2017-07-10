import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BooksService {
    books: Book[] = [];

    constructor(private router: Router, private http: Http) {}

    // Retorna todos os livros
    getAll(): Observable<Book[]> {
        return this.http.get('http://localhost:8888/livros')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    // Retorna um livro
    getOneById(id: number): Observable<Book> {
        return this.http.get('http://localhost:8888/livro/' + id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    // Insere um livro
    create(book: Book): Observable<Book> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8888/livro', JSON.stringify(book), options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    // Atualiza um livro
    update(book: Book): Observable<Book> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('http://localhost:8888/livro/' + book.id, JSON.stringify(book), options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    delete(id: number) {
        for (const i in this.books) {
            if (this.books[i].id == id) {
                this.books.splice(parseInt(i, 0), 1);
            }
        }
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
        return this.books.length;
    }

    // add(book: Book) {
    //     book.id = this.getTotalItems() + 1;
    //     this.books.unshift(book);
    // }
}
