import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsAdminGuard implements CanActivate {

    public canActivate() {
        const rawValue = localStorage.getItem('isAdmin');
        if (!rawValue)
            return false;

        const isAdmin = JSON.parse(rawValue) as boolean;
        return isAdmin;
    }
}