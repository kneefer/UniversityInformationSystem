import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SessionData } from '../providers/session-data';

import { BearerToken } from '../models/bearer-token-model'
import { LoginModel } from '../models/login-model'
import { AppConfig } from '../app/app.config'

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http, public storage: Storage, public session: SessionData) {
    console.log('Hello AuthService Provider');
  }

  login(user: LoginModel): any {
    const body = `grant_type=password&username=${user.email}&password=${user.password}`;
    return this.http.post(AppConfig.TOKEN_ENDPOINT, body)
      .do(data => console.log(`All: ${data}`))
      .catch(this.handleError)
      .map((response: Response) => BearerToken.deserialize(response.json()))
      .do((token: BearerToken) => this.storage.set('bearer-token', JSON.stringify(token)))
      .do((token: BearerToken) => this.session.setToken(token));
    // .do((token: BearerToken) => localStorage.setItem('bearer-token', JSON.stringify(token)));
  }

  logout() {
    // if (localStorage.getItem('bearer-token')) {
    //   localStorage.removeItem('bearer-token');
    // }
    this.storage.clear();
    console.log('Logged out');
  }

  // getLoggedInUserName(): string {
  //   const rawToken = localStorage.getItem('bearer-token');
  //   const token = BearerToken.deserialize(JSON.parse(rawToken));
  //   return token.userName;
  // }

  // isLogged(): boolean {
  //   const rawToken = localStorage.getItem('bearer-token');
  //   if (rawToken) return true;
  //   return false;
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
