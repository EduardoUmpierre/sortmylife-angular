import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/book';

import { BooksService } from '../books.service';
import { ReadedBooksService } from '../readed-books.service';
import { FavoriteBooksService } from '../favorite-books.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.sass']
})
export class BookViewComponent implements OnInit {
    index: number;
    book: Book;
    readed: boolean;
    favorite: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BooksService,
        private readedBooksService: ReadedBooksService,
        private favoriteBooksService: FavoriteBooksService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.index = params['index'];
            this.book = this.service.getOneByIndex(this.index - 1);
            this.readed = this.readedBooksService.getOneByObject(this.book);
            this.favorite = this.favoriteBooksService.getOneByObject(this.book);
        });
    }

    edit(index: number) {
        this.router.navigate(['livro/editar', index]);
    }

    toggleReaded() {
        if (this.readed) {
            this.readedBooksService.delete(this.book);
        } else {
            this.readedBooksService.add(this.book);
        }

        this.readed = !this.readed;
    }

    toggleFavorite() {
        if (this.favorite) {
            this.favoriteBooksService.delete(this.book);
        } else {
            this.favoriteBooksService.add(this.book);
        }

        this.favorite = !this.favorite;
    }

    delete(index: number) {
        if (this.confirm()) {
            this.service.delete(index);
            this.readedBooksService.delete(this.book);
            this.favoriteBooksService.delete(this.book);

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
