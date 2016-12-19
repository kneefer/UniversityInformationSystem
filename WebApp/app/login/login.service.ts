import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { APP_CONFIG, IAppConfig } from '../app.config'

export class User {
    constructor(
        public email: string,
        public password: string) { }
}

export class Token {
    public accessToken: string;
    public token_type: string;
    public expires_in: number;
    public userName: string;
}

@Injectable()
export class LoginService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public login(user: User) : Observable<Token> {
        const body = JSON.stringify({ username: user.email, password: user.password });
        return this.http.post(this.config.tokenEndpoint, body)
            .do(data => console.log(`All: ${data}`))
            .catch(this.handleError)
            .map((response: Response) => (response.json() as Token));
    }

    public logout() {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}