import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { IsAuthGuard } from './isAuth.guard';

@Injectable()
export class IsUserGuard extends IsAuthGuard {

    public canActivate() {
        return super.canActivate(); // Temporary
    }
}