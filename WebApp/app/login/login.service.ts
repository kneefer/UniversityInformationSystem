import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IEntity } from '../shared/models/entity';

export class User {
	constructor(
		public email: string,
		public password: string) { }
}

var users = [
	new User('admin@admin.com', 'adm9'),
	new User('user1@gmail.com', 'a23')
];

@Injectable()
export class LoginService {

	constructor(
		private _router: Router) { }

	logout() {
		localStorage.removeItem("user");
		this._router.navigate(['Login']);
	}

	login(user : User) {
		//var authenticatedUser = users.find(u => u.email === user.email);
		//if (authenticatedUser && authenticatedUser.password === user.password) {
		//	localStorage.setItem("user", authenticatedUser);
		//	this._router.navigate(['Home']);
		//	return true;
		//}
		//return false;

	}

	checkCredentials() {
		if (localStorage.getItem("user") === null) {
			this._router.navigate(['Login']);
		}
	} 

}