import { Injectable } from '@angular/core';

import { BearerToken  } from '../models/bearer-token-model';
/*
  Generated class for the SessionData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionData {

  private token: BearerToken;

  constructor() {
    console.log('Hello SessionData Provider');
  }

  getToken(): BearerToken { return this.token; }

  setToken(token: BearerToken) { this.token = token; }

  getLoggedUserName(): string { 
    if(this.token)
      return this.token.userName; 
    return null;
  }
}
