import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/book/book';
import { Usuario } from 'app/login/usuario';

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
    errorMessage: any;
    currentUser: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BooksService,
        private readedBooksService: ReadedBooksService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

            this.service.getOneById(this.id).subscribe(
                book => {
                    if (Object.keys(book).length <= 0) {
                        this.router.navigate(['/inicio']);
                    }

                    this.readedBooksService.getOneByUserAndBook(this.currentUser.id, this.id).subscribe(
                        readed => this.readed = Object.keys(readed).length > 0 ? true : false,
                        error => console.log(error)
                    )

                    this.book = book;
                },
                error => this.errorMessage = <any>error
            );
        });
    }

    toggleReaded() {
        this.readedBooksService.setOneByUserAndBook(this.currentUser.id, this.id).subscribe(
            readed => this.readed = !this.readed,
            error => console.log(error)
        )
    }

    delete() {
        if (this.confirm()) {
            this.service.delete(this.id).subscribe(
                book => {
                    console.log(book);
                },
                error => this.errorMessage = error
            );
            
            // this.readedBooksService.delete(this.id);
            // this.favoriteBooksService.delete(this.id);
            // this.wantToReadBooksService.delete(this.id);

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
