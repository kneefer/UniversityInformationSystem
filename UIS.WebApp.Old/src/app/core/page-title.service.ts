import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { BearerToken } from '../models/bearer-token.model';

@Injectable()
export class PageTitleService {
    public name = new Subject<string>();

    public getLoggedInUserName(): string {
        const rawToken = localStorage.getItem('bearer-token');
        const token = BearerToken.deserialize(JSON.parse(rawToken));
        return token.userName;
    }
}