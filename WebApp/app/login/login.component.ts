import { Component, OnInit } from '@angular/core';

import { IEntity } from '../shared/models/entity';
import { LoginService, User } from './login.service';

declare var __moduleName: any;
@Component({
    moduleId: __moduleName,
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginComponent implements OnInit {

    public user = new User('', '');
    public errorMsg = '';

    constructor(private _loginService: LoginService) {

    }

    ngOnInit(): void {

    }

    login() {
        if (!this._loginService.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }
}