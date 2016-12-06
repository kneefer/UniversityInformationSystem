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


}