import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { EntryViewModel } from '../models/entry.model';
import { TabletViewModel } from '../models/tablet.model';
import { TemplateViewModel } from '../models/template.model';
import { TokenViewModel } from '../models/token.model';
import { UserViewModel } from '../models/user.model';

import { APP_CONFIG, IAppConfig } from '../app.config'

@Injectable()
export class PanelUserService {

    private readonly userApiUrl: string;

    constructor(
        @Inject(APP_CONFIG) private config = <IAppConfig>null,
        private http: Http) {

        this.userApiUrl = config.userApiEndpoint;
    }

    private log(toLog: string): void {
        console.log(toLog);
    }

    ///////////////////////////////////////
    // Tablet operations
    ///////////////////////////////////////

    public getTablets(): Observable<TabletViewModel[]> {
        const tabletsPromise = this.http.get(this.userApiUrl + 'Tablets')
            .map((resp: Response) => resp.json().map(TabletViewModel.deserialize))
            .do<TabletViewModel[]>(data => this.log(`All tablets of user: ${JSON.stringify(data)}`));

        return tabletsPromise;

        // #region Mock
        //const tablets = [
        //    new TabletViewModel('1', '201', 'descript'),
        //    new TabletViewModel('3', '634', ''),
        //    new TabletViewModel('2', '123', 'fsfsdf'),
        //];

        //return Observable.from([tablets]);
        // #endregion
    }

    ///////////////////////////////////////
    // Entry operations
    ///////////////////////////////////////

    public getEntriesOfTablet(tablet: TabletViewModel): Observable<EntryViewModel[]> {
        const entriesOfTabletPromise = this.http.get(this.userApiUrl + `Tablets/${tablet.id}/Entries`)
            .map((resp: Response) => resp.json().map(EntryViewModel.deserialize))
            .do<EntryViewModel[]>(data => this.log(`Entries of tablet ${tablet.id}: ${JSON.stringify(data)}`));

        return entriesOfTabletPromise;

        // #region Mock
        //const entries = [
        //    new EntryViewModel('1', new Date(2016, 12, 3), '<h1>$(Communicate)</h1>', [
        //        new TokenViewModel('Communicate', 'fill the token', 'Jutro mnie nie ma')
        //    ]),
        //    new EntryViewModel('2', new Date(2016, 11, 4), '<h1>$(Communicate)</h1><h2>$(OtherToken)</h2>', [
        //        new TokenViewModel('Communicate', 'fill the token', 'Nikt nie zdał'),
        //        new TokenViewModel('OtherToken', 'other default', 'Naprawdę hehe')
        //    ])
        //];

        //return Observable.from([entries]);
        // #endregion
    }

    public addEntryToTablet(entry: EntryViewModel, tablet: TabletViewModel): Observable<any> {
        const addEntryToTabletPromise = this.http.post(this.userApiUrl + `Tablets/${tablet.id}/Entries`, JSON.stringify(entry))
            .map((resp: Response) => EntryViewModel.deserialize(resp.json()))
            .do<EntryViewModel>(data => this.log(`Create entry response: ${JSON.stringify(data)}`));

        return addEntryToTabletPromise;
    }

    ///////////////////////////////////////
    // Preview entry operations
    ///////////////////////////////////////

    public addPreviewEntry(entry: EntryViewModel): Observable<string> {
        const addPreviewPromise = this.http.post(this.userApiUrl + 'Previews', JSON.stringify(entry))
            .map((resp: Response) => EntryViewModel.deserialize(resp.json()).id)
            .do<string>(data => this.log(`Create preview response: ${JSON.stringify(data)}`));

        return addPreviewPromise;
    }

    public getPreviewEntry(entryGuid: string): Observable<EntryViewModel> {
        const previewEntryPromise = this.http.get(this.userApiUrl + `Previews/${entryGuid}`)
            .map((resp: Response) => EntryViewModel.deserialize(resp.json))
            .do<EntryViewModel>(data => this.log(`Entry ${entryGuid}: ${JSON.stringify(data)}`));

        return previewEntryPromise;

        // #region Mock
        //const entry = new EntryViewModel('1', new Date(2016, 11, 5), '<h1>$(Comm)</h1>', [
        //    new TokenViewModel('Comm', 'fill the token', 'Test communicate')
        //]);
        //return Observable.from([entry]);
        // #endregion
    }

    ///////////////////////////////////////
    // Template operations
    ///////////////////////////////////////

    public getTemplates(): Observable<TemplateViewModel[]> {
        const templatesPromise = this.http.get(this.userApiUrl + 'Templates')
            .map((resp: Response) => resp.json().map(TemplateViewModel.deserialize))
            .do<TemplateViewModel[]>(data => this.log(`All user's templates: ${JSON.stringify(data)}`));

        return templatesPromise;

        // #region Mock
        //const templates = [
        //    new TemplateViewModel('1', 'templ_name', 'desc', '<h1>$(Communicate)</h1>', [
        //        new TokenViewModel('1', 'Communicate', 'fill the token')
        //    ]),
        //    new TemplateViewModel('2', 'templ_name2', 'desc', '<h1>$(Communicate)</h1><h2>$(OtherToken)</h2>', [
        //        new TokenViewModel('1', 'Communicate', 'fill the token'),
        //        new TokenViewModel('2', 'OtherToken', 'other default')
        //    ])
        //];

        //return Observable.from([templates]);
        // #endregion
    }

    public addTemplate(template: TemplateViewModel): Observable<any> {
        const addTemplatePromise = this.http.post(this.userApiUrl + 'Templates', JSON.stringify(template))
            .map((resp: Response) => this.log(`Create template response: ${JSON.stringify(resp.json())}`));

        return addTemplatePromise;
    }

    public editTemplate(template: TemplateViewModel): Observable<any> {
        const updateTemplatePromise = this.http.put(this.userApiUrl + 'Templates', JSON.stringify(template))
            .map((resp: Response) => this.log(`Update template response: ${JSON.stringify(resp.json())}`));

        return updateTemplatePromise;
    }

    public deleteTemplate(template: TemplateViewModel): Observable<any> {
        const deleteTemplatePromise = this.http.delete(this.userApiUrl + `Templates/${template.id}`)
            .map((resp: Response) => this.log(`Delete template status: ${resp.statusText}`));

        return deleteTemplatePromise;
    }
}