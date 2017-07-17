import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuario: any = {};
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.loading = true;

        console.log(this.usuario);

        this.authService.login(this.usuario.username, this.usuario.password)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                }
            );
    }

}
