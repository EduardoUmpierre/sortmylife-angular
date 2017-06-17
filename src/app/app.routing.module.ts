import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {BookFormComponent} from './book/book-form/book-form.component';
import {BookViewComponent} from './book/book-view/book-view.component';
import {MovieFormComponent} from './movie/movie-form/movie-form.component';
import {MovieViewComponent} from './movie/movie-view/movie-view.component';

const appRoute: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: HomeComponent},
    {path: 'livro/novo', component: BookFormComponent},
    {path: 'filme/novo', component: MovieFormComponent},
    {path: 'livro/editar/:id', component: BookFormComponent},
    {path: 'filme/editar/:id', component: MovieFormComponent},
    {path: 'livro/:id', component: BookViewComponent},
    {path: 'filme/:id', component: MovieViewComponent}
];

@NgModule({

    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]

})
export class AppRoutingModule {



}