import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router) { }

    public canActivate() {
        return true;
    }

    // TODO: Revert to appropriate version
	public canActivate2() {
		if (localStorage.getItem('id_token')) {
			return true;
		}

		console.log('Lack of access token. Redirecting to login page.');
        this.router.navigate(['login']);
        return false;
	}
}