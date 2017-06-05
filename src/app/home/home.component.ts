import { Component, OnInit } from '@angular/core';
import { FavoriteBooksService } from 'app/favorite-books.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    favoriteService: FavoriteBooksService = this.favoriteBooksService;

    constructor(
        private favoriteBooksService: FavoriteBooksService
    ) { }

    ngOnInit() {
    }

}
