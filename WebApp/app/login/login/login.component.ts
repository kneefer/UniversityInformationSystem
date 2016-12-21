﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { PageTitleService } from '../../core/page-title.service';

import { BearerToken } from '../../models/bearer-token.model';
import { LoginModel } from '../../models/login.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginComponent implements OnInit {

    public user = new LoginModel('', '');
    public errorMsg = '';

    constructor(
        private loginService: LoginService,
        private pageTitleService: PageTitleService,
        private router: Router) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Login');
    }

    public login() {
        this.errorMsg = null;

        this.loginService.login(this.user)
            .subscribe(isAdmin => {
                this.router.navigate(isAdmin ? ['paneladmin'] : ['paneluser']);
            }, error => {
                this.errorMsg = error === 'invalid_grant'
                    ? 'Wrong username or password!'
                    : 'Login problem';
                console.log(error.text);
            });
    }
}