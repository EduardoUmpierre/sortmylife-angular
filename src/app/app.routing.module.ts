import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {BookFormComponent} from "./book/book-form/book-form.component";
import {BookViewComponent} from "./book/book-view/book-view.component";
import {MovieComponent} from "./movie/movie.component";

const appRoute: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: HomeComponent},
    {path: 'filme', component: MovieComponent},
    {path: 'livro/novo', component: BookFormComponent},
    {path: 'livro/editar/:id', component: BookFormComponent},
    {path: 'livro/:id', component: BookViewComponent}
];

@NgModule({

    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]

})
export class AppRoutingModule {



}