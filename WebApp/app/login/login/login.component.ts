import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService, User } from '../login.service';

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
        private router: Router) { }

    public ngOnInit(): void {

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