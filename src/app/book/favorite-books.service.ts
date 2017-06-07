import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable()
export class FavoriteBooksService {
    favoriteBooks: Book[] = [];

    constructor() { }

    getAll() {
        return this.favoriteBooks;
    }

    hasOneById(id: number) {
        for (const i in this.favoriteBooks) {
            if (this.favoriteBooks[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(book: Book) {
        this.favoriteBooks.unshift(book);
    }

    delete(id: number) {
        for (const i in this.favoriteBooks) {
            if (this.favoriteBooks[i].id == id) {
                this.favoriteBooks.splice(parseInt(i, 0), 1);
            }
        }
    }
}
