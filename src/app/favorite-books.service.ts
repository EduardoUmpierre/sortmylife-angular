import { Injectable } from '@angular/core';
import { Book } from 'app/book';

@Injectable()
export class FavoriteBooksService {
    favoriteBooks: Book[] = [];

    constructor() { }

    getAll() {
        return this.favoriteBooks;
    }

    getOneByObject(book: Book) {
        for (let b in this.favoriteBooks) {
            if (this.favoriteBooks[b] == book) {
                return true;
            }
        }

        return false;
    }

    add(book: Book) {
        this.favoriteBooks.unshift(book);
    }

    delete(book: Book) {
        for (let b in this.favoriteBooks) {
            if (this.favoriteBooks[b] == book) {
                this.favoriteBooks.splice(parseInt(b, 0), 1);
            }
        }
    }
}
