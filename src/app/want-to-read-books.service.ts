import { Injectable } from '@angular/core';
import { Book } from 'app/book';

@Injectable()
export class WantToReadBooksService {
    wantToReadBooks: Book[] = [];

    constructor() { }

    getAll() {
        return this.wantToReadBooks;
    }

    hasOneById(id: number) {
        for (const i in this.wantToReadBooks) {
            if (this.wantToReadBooks[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(book: Book) {
        this.wantToReadBooks.unshift(book);
    }

    delete(id: number) {
        for (const i in this.wantToReadBooks) {
            if (this.wantToReadBooks[i].id == id) {
                this.wantToReadBooks.splice(parseInt(i, 0), 1);
            }
        }
    }
}
