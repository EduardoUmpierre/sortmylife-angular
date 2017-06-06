import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BooksService } from './books.service';
import { FavoriteBooksService } from './favorite-books.service';
import { ReadedBooksService } from './readed-books.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HomeComponent } from './home/home.component';
import { WantToReadBooksService } from './want-to-read-books.service';

const appRoute: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: HomeComponent},
    {path: 'livro/novo', component: BookFormComponent},
    {path: 'livro/editar/:id', component: BookFormComponent},
    {path: 'livro/:id', component: BookViewComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BookListComponent,
        BookFormComponent,
        BookViewComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoute),
    ],
    providers: [
        BooksService,
        FavoriteBooksService,
        ReadedBooksService,
        WantToReadBooksService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
