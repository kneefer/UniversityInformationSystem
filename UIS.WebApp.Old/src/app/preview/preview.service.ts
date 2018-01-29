import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { EntryViewModel } from '../models/entry.model';
import { TokenViewModel } from '../models/token.model';

import { APP_CONFIG, IAppConfig } from '../app.config'

@Injectable()
export class PreviewService {

    private readonly userApiUrl: string;

    constructor(
        @Inject(APP_CONFIG) private config = <IAppConfig>null,
        private http: Http) {

        this.userApiUrl = config.userApiEndpoint;
    }

    private log(toLog: string): void {
        console.log(toLog);
    }

    public getTabletContent(tabletId: string): Observable<EntryViewModel> {

        const tabletContentPromise = this.http.get(this.userApiUrl + `Tablets/${tabletId}/CurrentEntry`)
            .map((resp: Response) => EntryViewModel.deserialize(resp.json()))
            .do<EntryViewModel>(data => this.log(`Current tablet ${tabletId} entry: ${JSON.stringify(data)}`));

        return tabletContentPromise;

        // #region Mock
        //const entry = new EntryViewModel('2', new Date(2016, 11, 4), '<h1>$(Communicate)</h1><h2>$(OtherToken)</h2>', [
        //    new TokenViewModel('Communicate', 'fill the token', 'Nikt nie zdał'),
        //    new TokenViewModel('OtherToken', 'other default', 'Naprawdę hehe')
        //]);
        //return Observable.from([entry]);
        // #endregion
    }

    public getPreview(guid: string): Observable<EntryViewModel> {

        const previewEntryPromise = this.http.get(this.userApiUrl + `Previews/${guid}`)
            .map((resp: Response) => EntryViewModel.deserialize(resp.json()))
            .do<EntryViewModel>(data => this.log(`Preview entry ${guid} entry: ${JSON.stringify(data)}`));

        return previewEntryPromise;

        // #region Mock
        //const entry = new EntryViewModel('1', new Date(2016, 12, 3), '<h1>$(Communicate)</h1>', [
        //    new TokenViewModel('Communicate', 'fill the token', 'Jutro mnie nie ma')
        //]);
        //return Observable.from([entry]);
        // #endregion
    }
}