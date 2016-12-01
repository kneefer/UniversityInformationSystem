import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UserViewModel } from '../models/user.model';
import { TabletViewModel } from '../models/tablet.model';

import { APP_CONFIG, IAppConfig } from '../app.config'

@Injectable()
export class PanelAdminService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public getUsers(): Observable<UserViewModel[]> {
        const users = [
            new UserViewModel('1', 'Adam', 'Kowalski', 'adakow123', 'akow@fdsf.com', 'nothing'),
            new UserViewModel('2', 'Tomasz', 'Nowak', 'tomnow354', 'sdffd@fdsf.com', ''),
            new UserViewModel('3', 'Jarosław', 'Paduch', 'jaropad3434', 'df3@fd.com', ''),
            new UserViewModel('4', 'Agnieszka', 'Debudaj', 'agadebu34', 'df@df.com', 'description'),
            new UserViewModel('5', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
            new UserViewModel('6', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
            new UserViewModel('7', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
            new UserViewModel('8', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
            new UserViewModel('9', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', '')
        ];

        return Observable.from([users]);
    }

    public getUsersOfTablet(tablet: TabletViewModel): Observable<UserViewModel[]> {
        const users = [
            new UserViewModel('3', 'Jarosław', 'Paduch', 'jaropad3434', 'df3@fd.com', ''),
            new UserViewModel('4', 'Agnieszka', 'Debudaj', 'agadebu34', 'df@df.com', 'description'),
            new UserViewModel('5', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', '')
        ];

        return Observable.from([users]);
    }

    public addUser(user: UserViewModel): Observable<any> {
        return Observable.from([1]);
    }

    public editUser(user: UserViewModel): Observable<any> {
        return Observable.from([1]);
    }

    public deleteUser(user: UserViewModel): Observable<any> {
        return Observable.from([1]);
    }

    public getTablets(): Observable<TabletViewModel[]> {
        const tablets = [
            new TabletViewModel('1', '201', 'descript'),
            new TabletViewModel('3', '634', ''),
            new TabletViewModel('2', '123', 'fsfsdf'),
            new TabletViewModel('4', '652', 'sdf'),
            new TabletViewModel('5', '234', 'df'),
            new TabletViewModel('6', '564', '')
        ];

        return Observable.from([tablets]);
    }

    public getTabletsOfUser(user: UserViewModel): Observable<TabletViewModel[]> {
        const tablets = [
            new TabletViewModel('2', '123', 'fsfsdf'),
            new TabletViewModel('4', '652', 'sdf'),
            new TabletViewModel('5', '234', 'df')
        ];

        return Observable.from([tablets]);
    }

    public bindTabletWithUser(tablet: TabletViewModel, user: UserViewModel): Observable<any> {
        return Observable.from([1]);
    }

    public unbindTabletFromUser(tablet: TabletViewModel, user: UserViewModel): Observable<any> {
        return Observable.from([1]);
    }
}