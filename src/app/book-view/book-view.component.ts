import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.sass']
})
export class BookViewComponent implements OnInit {
    index: number;
    book: Book;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BooksService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.index = params['index'];
            this.book = this.service.getOneByIndex(this.index - 1);
        });
    }

    edit(index: number) {
        this.router.navigate(['livro/editar', index]);
    }

    delete(index: number) {
        if (this.confirm()) {
            this.service.delete(index);
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
