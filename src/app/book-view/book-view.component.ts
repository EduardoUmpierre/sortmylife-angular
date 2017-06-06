import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/book';

import { BooksService } from '../books.service';
import { ReadedBooksService } from '../readed-books.service';
import { FavoriteBooksService } from '../favorite-books.service';
import { WantToReadBooksService } from '../want-to-read-books.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.sass']
})
export class BookViewComponent implements OnInit {
    id: number;
    book: Book;
    readed: boolean;
    favorite: boolean;
    wantToRead: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BooksService,
        private readedBooksService: ReadedBooksService,
        private favoriteBooksService: FavoriteBooksService,
        private wantToReadBooksService: WantToReadBooksService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.book = this.service.getOneById(this.id);
            this.readed = this.readedBooksService.hasOneById(this.id);
            this.favorite = this.favoriteBooksService.hasOneById(this.id);
            this.wantToRead = this.wantToReadBooksService.hasOneById(this.id);
        });
    }

    toggleReaded() {
        if (this.readed) {
            this.readedBooksService.delete(this.id);
        } else {
            this.readedBooksService.add(this.book);
        }

        this.readed = !this.readed;
    }

    toggleFavorite() {
        if (this.favorite) {
            this.favoriteBooksService.delete(this.id);
        } else {
            this.favoriteBooksService.add(this.book);
        }

        this.favorite = !this.favorite;
    }

    toggleWantToRead() {
        if (this.wantToRead) {
            this.wantToReadBooksService.delete(this.id);
        } else {
            this.wantToReadBooksService.add(this.book);
        }

        this.wantToRead = !this.wantToRead;
    }

    delete() {
        if (this.confirm()) {
            this.service.delete(this.id);
            this.readedBooksService.delete(this.id);
            this.favoriteBooksService.delete(this.id);
            this.wantToReadBooksService.delete(this.id);

            this.router.navigate(['inicio']);
        }
    }

    confirm() {
        if (!confirm('Você quer deletar o livro "' + this.book.title + '"?')) {
            return false;
        }

        return true;
    }
}
