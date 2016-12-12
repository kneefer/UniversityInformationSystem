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

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public getTabletContent(tabletId: string): Observable<EntryViewModel> {
        const entry = new EntryViewModel('2', new Date(2016, 11, 4), '<h1>$(Communicate)</h1><h2>$(OtherToken)</h2>', [
            new TokenViewModel('Communicate', 'fill the token', 'Nikt nie zdał'),
            new TokenViewModel('OtherToken', 'other default', 'Naprawdę hehe')
        ]);
        return Observable.from([entry]);
    }

    public getPreview(guid: string): Observable<EntryViewModel> {
        const entry = new EntryViewModel('1', new Date(2016, 12, 3), '<h1>$(Communicate)</h1>', [
            new TokenViewModel('Communicate', 'fill the token', 'Jutro mnie nie ma')
        ]);
        return Observable.from([entry]);
    }
}