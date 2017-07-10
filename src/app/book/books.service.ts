import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Book } from './book';

@Injectable()
export class BooksService {

    json: Object[] = [];
    books: Book[] = [];

    constructor(
        private router: Router,
        private http: Http
    ) { }

    getApi() {
        this.http.get('http://localhost:8888/livros')
            .map( result => result.json())
            .subscribe(result => {
                this.json = result;
            }, erro => console.log(erro));

        return this.json;
    }

    getAll() {
        this.http.get('http://localhost:8888/livros')
            .map( result => result.json())
            .subscribe(result => {
                this.json = result;
                for (const item of this.json){
                    this.books.push(Object.create(item));
                }
            }, erro => console.log(erro));

        return this.books;
    }

    getTotalItems() {
        return this.books.length;
    }

    getOneById(id: number) {
        for (const i in this.books) {
            if (this.books[i].id == id) {
                return this.books[i];
            }
        }

        this.router.navigate(['inicio']);
    }

    add(book: Book) {
        book.id = this.getTotalItems() + 1;
        this.books.unshift(book);
    }

    update(book: Book) {
        for (const i in this.books) {
            if (this.books[i].id == book.id) {
                this.books[i] = book;
            }
        }
    }

    delete(id: number) {
        for (const i in this.books) {
            if (this.books[i].id == id) {
                this.books.splice(parseInt(i, 0), 1);
            }
        }
    }
}
