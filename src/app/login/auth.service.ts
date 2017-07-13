import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

    usuario: Usuario[] = [];
	private usuarioAutenticado = false;
	errorMessage: any;


	mostarMenuEmitter = new EventEmitter<boolean>();

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private http: Http
  ) { }

  login(email: string, password: string) {
      return this.http.post('http://localhost:8888/login', JSON.stringify({ login: email, password: password }))
          .map((response: Response) => {
              const user = response.json();

              if (user) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }
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

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  };

}
