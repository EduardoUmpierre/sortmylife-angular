import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: Usuario[] = [];
    private usuarioAutenticado = false;
    errorMessage: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

    /*login() {
 		this.authService.login(usuario.email, usuario.password)
            .subscribe(

            );
    }*/

}
