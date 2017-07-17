import {Component, Input, OnInit} from '@angular/core';
import { Usuario } from 'app/login/usuario';
import { AuthService } from 'app/login/auth.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    @Input() title: string;
    currentUser: Usuario;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationStart) {
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }
        });
    }

    logout() {
        this.currentUser = null;
        this.authService.logout();
    }
}
