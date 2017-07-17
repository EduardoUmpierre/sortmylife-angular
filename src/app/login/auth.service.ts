import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

    usuario: Usuario[] = [];
    errorMessage: any;

    mostarMenuEmitter = new EventEmitter<boolean>();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: Http
    ) { }

    login(email: string, password: string) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8888/login', JSON.stringify({ login: email, password: password }), options)
            .map((response: Response) => {
                const user = response.json();

                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });

        /*this.route.params.subscribe(params => {
         this.email = usuario.email;
         this.senha = usuario.senha;
         this.service.getLogin(this.email).subscribe(
         movie => this.movie = movie,
         error => this.errorMessage = error
         );
         if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
         this.usuarioAutenticado = true;

         this.mostarMenuEmitter.emit(true);

         this.router.navigate(['/']);

         }else{
         this.usuarioAutenticado = false;

         this.mostarMenuEmitter.emit(false);
         }*/

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');

        this.router.navigate(['/login']);
    }
}
