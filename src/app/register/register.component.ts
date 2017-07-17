import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/login/usuario.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(private router:Router,
                private usuarioService: UsuarioService) {
    }

    ngOnInit() {

    }

    register() {
        this.loading = true;

        console.log(this.model);

        this.usuarioService.create(this.model)
            .subscribe(
                data => {
                    console.log(data);

                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                    console.log(error);
                }
            );
    }

}
