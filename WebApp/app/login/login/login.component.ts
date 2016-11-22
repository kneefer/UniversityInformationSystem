import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService, User } from '../login.service';
import { PageTitleService } from '../../core/page-title.service';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginComponent implements OnInit {

    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private loginService: LoginService,
        private pageTitleService: PageTitleService,
        private router: Router) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Login');
    }

    public login() {
        this.loginService.login(this.user)
            .subscribe(token => {
                localStorage.setItem('id_token', token.accessToken);
                this.router.navigate(['paneladmin']);
            }, error => {
                this.errorMsg = error.text;
                console.log(error.text);
            });
    }
}