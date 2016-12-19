import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsUserGuard implements CanActivate {

    public canActivate() {
        return true;
    }
}