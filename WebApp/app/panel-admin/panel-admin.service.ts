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

    private readonly adminApiUrl: string;

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) {

        this.adminApiUrl = config.adminApiEndpoint;
    }

    private log(toLog: string): void {
        console.log(toLog);
    }

    /////////////////////////////////////////////
    // User operations
    /////////////////////////////////////////////

    public getUsers(): Observable<UserViewModel[]> {
        const usersPromise = this.http.get(this.adminApiUrl + 'Users')
            .map((resp: Response) => resp.json().map(UserViewModel.deserialize))
            .do<UserViewModel[]>(data => this.log(`All users: ${JSON.stringify(data)}`));

        return usersPromise;

        // #region Mock
        //const users = [
        //    new UserViewModel('1', 'Adam', 'Kowalski', 'adakow123', 'akow@fdsf.com', 'nothing'),
        //    new UserViewModel('2', 'Tomasz', 'Nowak', 'tomnow354', 'sdffd@fdsf.com', ''),
        //    new UserViewModel('3', 'Jarosław', 'Paduch', 'jaropad3434', 'df3@fd.com', ''),
        //    new UserViewModel('4', 'Agnieszka', 'Debudaj', 'agadebu34', 'df@df.com', 'description'),
        //    new UserViewModel('5', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
        //    new UserViewModel('6', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
        //    new UserViewModel('7', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
        //    new UserViewModel('8', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''),
        //    new UserViewModel('9', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', '')
        //];

        //return Observable.from([users]);
        // #endregion
    }

    public getUsersOfTablet(tablet: TabletViewModel): Observable<UserViewModel[]> {
        const usersOfTabletPromise = this.http.get(this.adminApiUrl + `Tablets/${tablet.id}/Users`)
            .map((resp: Response) => resp.json().map(UserViewModel.deserialize))
            .do<UserViewModel[]>(data => this.log(`Users of tablet ${tablet.id}: ${JSON.stringify(data)}`));

        return usersOfTabletPromise;

        // #region Mock
        //const users = [
        //    new UserViewModel('3', 'Jarosław', 'Paduch', 'jaropad3434', 'df3@fd.com', ''),
        //    new UserViewModel('4', 'Agnieszka', 'Debudaj', 'agadebu34', 'df@df.com', 'description'),
        //    new UserViewModel('5', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', '')
        //];

        //return Observable.from([users]);
        // #endregion
    }

    public addUser(user: UserViewModel): Observable<any> {
        const addUserPromise = this.http.post(this.adminApiUrl + 'Users', JSON.stringify(user))
            .map((resp: Response) => this.log(`Create user response: ${JSON.stringify(resp.json())}`));

        return addUserPromise;
    }

    public editUser(user: UserViewModel): Observable<any> {
        const updateUserPromise = this.http.put(this.adminApiUrl + 'Users', JSON.stringify(user))
            .map((resp: Response) => this.log(`Update user response: ${JSON.stringify(resp.json())}`));

        return updateUserPromise;
    }

    public deleteUser(user: UserViewModel): Observable<any> {
        const deleteUserPromise = this.http.delete(this.adminApiUrl + `Users/${user.id}`)
            .map((resp: Response) => this.log(`Delete user status: ${resp.statusText}`));

        return deleteUserPromise;
    }

    ///////////////////////////////////////
    // Tablet operations
    ///////////////////////////////////////

    public getTablets(): Observable<TabletViewModel[]> {
        const tabletsPromise = this.http.get(this.adminApiUrl + 'Tablets')
            .map((resp: Response) => resp.json().map(TabletViewModel.deserialize))
            .do<TabletViewModel[]>(data => this.log(`All tablets: ${JSON.stringify(data)}`));

        return tabletsPromise;

        // #region Mock
        //const tablets = [
        //    new TabletViewModel('1', '201', 'descript'),
        //    new TabletViewModel('3', '634', ''),
        //    new TabletViewModel('2', '123', 'fsfsdf'),
        //    new TabletViewModel('4', '652', 'sdf'),
        //    new TabletViewModel('5', '234', 'df'),
        //    new TabletViewModel('6', '564', '')
        //];

        //return Observable.from([tablets]);
        // #endregion
    }

    public getTabletsOfUser(user: UserViewModel): Observable<TabletViewModel[]> {
        const tabletsOfUserPromise = this.http.get(this.adminApiUrl + `Users/${user.id}/Tablets`)
            .map((resp: Response) => resp.json().map(TabletViewModel.deserialize))
            .do<TabletViewModel[]>(data => this.log(`Tablets of user ${user.id}: ${JSON.stringify(data)}`));

        return tabletsOfUserPromise;

        // #region Mock
        //const tablets = [
        //    new TabletViewModel('2', '123', 'fsfsdf'),
        //    new TabletViewModel('4', '652', 'sdf'),
        //    new TabletViewModel('5', '234', 'df')
        //];

        //return Observable.from([tablets]);
        // #endregion
    }

    public addTablet(tablet: TabletViewModel): Observable<any> {
        const addTabletPromise = this.http.post(this.adminApiUrl + 'Tablets', JSON.stringify(tablet))
            .map((resp: Response) => this.log(`Create tablet response: ${JSON.stringify(resp.json())}`));

        return addTabletPromise;
    }

    public editTablet(tablet: TabletViewModel): Observable<any> {
        const updateTabletPromise = this.http.put(this.adminApiUrl + 'Tablets', JSON.stringify(tablet))
            .map((resp: Response) => this.log(`Update tablet response: ${JSON.stringify(resp.json())}`));

        return updateTabletPromise;
    }

    public deleteTablet(tablet: TabletViewModel): Observable<any> {
        const deleteTabletPromise = this.http.delete(this.adminApiUrl + `Tablets/${tablet.id}`)
            .map((resp: Response) => this.log(`Delete tablet status: ${resp.statusText}`));

        return deleteTabletPromise;
    }

    public bindTabletWithUser(tablet: TabletViewModel, user: UserViewModel): Observable<any> {
        const bindTabletWithUserPromise = this.http.post(this.adminApiUrl + `Users/${user.id}/Bind`, JSON.stringify({ tabletId: tablet.id}))
            .map((resp: Response) => this.log(`Bind user ${user.id} with tablet ${tablet.id} status: ${resp.statusText}`));

        return bindTabletWithUserPromise;
    }

    public unbindTabletFromUser(tablet: TabletViewModel, user: UserViewModel): Observable<any> {
        const unbindTabletFromUserPromise = this.http.delete(this.adminApiUrl + `Users/${user.id}/UnbindTablet/${tablet.id}`)
            .map((resp: Response) => this.log(`Unbind user ${user.id} from tablet ${tablet.id} status: ${resp.statusText}`));

        return unbindTabletFromUserPromise;
    }
}