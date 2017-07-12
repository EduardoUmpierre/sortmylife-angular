import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import 'rxjs/add/operator/map';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BookFormComponent} from './book/book-form/book-form.component';
import {BookViewComponent} from './book/book-view/book-view.component';
import {MovieFormComponent} from './movie/movie-form/movie-form.component';
import {MovieViewComponent} from './movie/movie-view/movie-view.component';
import {SeriesFormComponent} from './series/series-form/series-form.component';
import {SeriesViewComponent} from './series/series-view/series-view.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';

const appRoute: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    {path: 'inicio', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'livro/novo', component: BookFormComponent, canActivate: [AuthGuard]},
    {path: 'filme/novo', component: MovieFormComponent, canActivate: [AuthGuard]},
    {path: 'series/novo', component: SeriesFormComponent, canActivate: [AuthGuard]},
    {path: 'livro/editar/:id', component: BookFormComponent, canActivate: [AuthGuard]},
    {path: 'filme/editar/:id', component: MovieFormComponent, canActivate: [AuthGuard]},
    {path: 'series/editar/:id', component: SeriesFormComponent, canActivate: [AuthGuard]},
    {path: 'livro/:id', component: BookViewComponent, canActivate: [AuthGuard]},
    {path: 'filme/:id', component: MovieViewComponent, canActivate: [AuthGuard]},
    {path: 'series/:id', component: SeriesViewComponent, canActivate: [AuthGuard]}
];

@NgModule({

    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]

})
export class AppRoutingModule {



}