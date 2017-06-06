import { Injectable } from '@angular/core';
import { Book } from 'app/book';

@Injectable()
export class ReadedBooksService {
    readedBooks: Book[] = [];

    constructor() { }

    getAll() {
        return this.readedBooks;
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
