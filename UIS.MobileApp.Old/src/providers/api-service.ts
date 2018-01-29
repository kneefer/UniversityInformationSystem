import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TabletViewModel } from '../models/tablet-model';
import { TemplateViewModel } from '../models/template-model';
import { EntryViewModel } from '../models/entry-model';
import { AppConfig } from '../app/app.config'

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiService {

  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }

  getTablets(): Observable<TabletViewModel[]> {
    const tabletsPromise = this.http.get(`${AppConfig.USER_API_ENDPOINT}Tablets`)
      .map((resp: Response) => resp.json().map(TabletViewModel.deserialize))
      .do((data: TabletViewModel[]) => console.log(`All tablets of user: ${JSON.stringify(data)}`));

    return tabletsPromise;
  }

  getTemplates(): Observable<TemplateViewModel[]> {
    const templatesPromise = this.http.get(`${AppConfig.USER_API_ENDPOINT}Templates`)
      .map((resp: Response) => resp.json().map(TemplateViewModel.deserialize))
      .do((data: TemplateViewModel[]) => console.log(`All user's templates: ${JSON.stringify(data)}`));

    return templatesPromise;
  }

  addEntryToTablet(entry: EntryViewModel, tablet: TabletViewModel): Observable<any> {
    const addEntryToTabletPromise = this.http.post(AppConfig.USER_API_ENDPOINT + `Tablets/${tablet.id}/Entries`, JSON.stringify(entry))
      .map((resp: Response) => EntryViewModel.deserialize(resp.json()))
      .do((data: EntryViewModel) => console.log(`Create entry response: ${JSON.stringify(data)}`));

    return addEntryToTabletPromise;
  }

}
