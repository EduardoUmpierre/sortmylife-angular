import { Injectable } from '@angular/core';
import { Book } from 'app/book';

@Injectable()
export class ReadedBooksService {
    readedBooks: Book[] = [];

    constructor() { }

    getAll() {
        return this.readedBooks;
    }

    getOneByObject(book: Book) {
        for (let b in this.readedBooks) {
            if (this.readedBooks[b] == book) {
                return true;
            }
        }

        return false;
    }

    add(book: Book) {
        this.readedBooks.unshift(book);
    }

    delete(book: Book) {
        for (let b in this.readedBooks) {
            if (this.readedBooks[b] == book) {
                this.readedBooks.splice(parseInt(b, 0), 1);
            }
        }
    }
}
