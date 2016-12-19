import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { APP_CONFIG, IAppConfig } from '../app.config'

import { BearerToken } from '../models/bearer-token.model'
import { LoginModel } from '../models/login.model'

@Injectable()
export class LoginService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public login(user: LoginModel): Observable<BearerToken> {
        const body = `grant_type=password&username=${user.email}&password=${user.password}`;
        return this.http.post(this.config.tokenEndpoint, body)
            .do(data => console.log(`All: ${data}`))
            .catch(this.handleError)
            .map((response: Response) => BearerToken.deserialize(response.json()));
    }

    public getIsAdmin(): Observable<boolean> {
        return this.http.get(`${this.config.accountApiEndpoint}IsAdmin`)
            .map((resp: Response) => resp.json())
            .do<boolean>(data => console.log(`IsAdmin: ${data}`));
    }

    public getIsUser(): Observable<boolean> {
        return this.http.get(`${this.config.accountApiEndpoint}IsUser`)
            .map((resp: Response) => resp.json())
            .do<boolean>(data => console.log(`IsUser: ${data}`));
    }

    public logout() {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}