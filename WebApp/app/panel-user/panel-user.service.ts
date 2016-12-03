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

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    ///////////////////////////////////////
    // Tablet operations
    ///////////////////////////////////////

    public getTablets(): Observable<TabletViewModel[]> {
        const tablets = [
            new TabletViewModel('1', '201', 'descript'),
            new TabletViewModel('3', '634', ''),
            new TabletViewModel('2', '123', 'fsfsdf'),
        ];

        return Observable.from([tablets]);
    }

    ///////////////////////////////////////
    // Entry operations
    ///////////////////////////////////////

    public getEntriesOfTablet(tablet: TabletViewModel): Observable<EntryViewModel[]> {
        const entries = [
            new EntryViewModel('1', new Date(2016, 12, 3), '<h1>$(Communicate)</h1>', [
                new TokenViewModel('1', 'Communicate', 'fill the token', 'Jutro mnie nie ma')
            ]),
            new EntryViewModel('2', new Date(2016, 11, 4), '<h1>$(Communicate)</h1><h2>$(OtherToken)</h2>', [
                new TokenViewModel('1', 'Communicate', 'fill the token', 'Nikt nie zdał'),
                new TokenViewModel('2', 'OtherToken', 'other default', 'Naprawdę hehe')
            ])
        ];

        return Observable.from([entries]);
    }

    public addEntryToTablet(entry: EntryViewModel, tablet: TabletViewModel): Observable<any> {
        return Observable.from([1]);
    }

    ///////////////////////////////////////
    // Preview entry operations
    ///////////////////////////////////////

    public addPreviewEntry(entry: EntryViewModel): Observable<string> {
        return Observable.from(['guidSample']);
    }

    public getPreviewEntry(entryGuid: string): Observable<EntryViewModel> {
        const entry = new EntryViewModel('1', new Date(2016, 11, 5), '<h1>$(Comm)</h1>', [
            new TokenViewModel('1', 'Comm', 'fill the token', 'Test communicate')
        ]);
        return Observable.from([entry]);
    }

    ///////////////////////////////////////
    // Template operations
    ///////////////////////////////////////

    public getTemplates(): Observable<TemplateViewModel[]> {
        const templates = [
            new TemplateViewModel('1', 'templ_name', 'desc', '<h1>$(Communicate)</h1>', [
                new TokenViewModel('1', 'Communicate', 'fill the token')
            ]),
            new TemplateViewModel('2', 'templ_name2', 'desc', '<h1>$(Communicate)</h1><h2>$(OtherToken)</h2>', [
                new TokenViewModel('1', 'Communicate', 'fill the token'),
                new TokenViewModel('2', 'OtherToken', 'other default')
            ])
        ];

        return Observable.from([templates]);
    }

    public addTemplate(template: TemplateViewModel): Observable<any> {
        return Observable.from([1]);
    }

    public editTemplate(template: TemplateViewModel): Observable<any> {
        return Observable.from([1]);
    }

    public deleteTemplate(template: TemplateViewModel): Observable<any> {
        return Observable.from([1]);
    }
}