import { Component, OnInit } from '@angular/core';

import { IEntity } from '../shared/models/entity';
import { LoginService } from './login.service';

@Component({
    templateUrl: 'app/login/login.html'
})
export class LoginComponent implements OnInit {

    constructor(private _loginService: LoginService) {

    }

    ngOnInit(): void {

    }
}