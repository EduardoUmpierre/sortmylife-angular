import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class ReadedBooksService {
    readedBooks: Book[] = [];

    constructor(private http: Http) { }

    getAll() {
        return this.readedBooks;
    }

    // Altera um livro
    setOneByUserAndBook(userId: number, bookId: number): Observable<boolean> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8888/livro/ler', {user: userId, book: bookId}, options)
                        .map(res => {
                            console.log(res);
                        })
                        .catch(this.handleError);
    }

    // Retorna um livro
    getOneByUserAndBook(userId: number, bookId: number): Observable<boolean> {
        return this.http.get('http://localhost:8888/livro/ler/' + userId + '/' + bookId)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        try {
            return res.json();
        } catch (e) {
            return {};
        }
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

    hasOneById(id: number) {
        for (const i in this.readedBooks) {
            if (this.readedBooks[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(book: Book) {
        this.readedBooks.unshift(book);
    }

    delete(id: number) {
        for (const i in this.readedBooks) {
            if (this.readedBooks[i].id == id) {
                this.readedBooks.splice(parseInt(i, 0), 1);
            }
        }
    }
}
