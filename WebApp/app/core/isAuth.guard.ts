import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsAuthGuard implements CanActivate {

	public canActivate() {
		if (localStorage.getItem('bearer-token')) {
			return true;
		}

        return false;
	}
}