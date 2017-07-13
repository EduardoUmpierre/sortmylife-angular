import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Usuario} from './usuario';

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [];

  constructor(private router: Router, private http: Http) {}

  // Retorna todos os usuários
  getAll(): Observable<Usuario[]> {
    return this.http.get('http://localhost:8888/usuarios')
        .map(this.extractData)
        .catch(this.handleError);
  }

    // Retorna todos os usuários
    getLogin(email: string): Observable<Usuario> {
        return this.http.get('http://localhost:8888/usuarios/' + email)
            .map(this.extractData)
            .catch(this.handleError);
    }

  // Retorna todos os usuários
  getOneById(id: number): Observable<Usuario> {
    return this.http.get('http://localhost:8888/usuarios/' + id)
        .map(this.extractData)
        .catch(this.handleError);
  }

  // Insere um filme
  create(usuario: Usuario): Observable<Usuario> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8888/usuarios', JSON.stringify(usuario), options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  // Atualiza um filme
  update(usuario: Usuario): Observable<Usuario> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put('http://localhost:8888/usuarios/' + usuario.id, JSON.stringify(usuario), options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  // Remove um filme
  delete(id: number): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.delete('http://localhost:8888/usuarios/' + id, options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();

    console.log(body);

    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
