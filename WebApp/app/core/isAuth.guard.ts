import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsAuthGuard implements CanActivate {

	public canActivate() {
	    const accessToken = localStorage.getItem('bearer-token');
        return accessToken ? true : false;
	}
}