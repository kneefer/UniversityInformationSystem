import { Injectable, Inject } from '@angular/core';
import {
    RequestOptions, Http, XHRBackend, Request, Headers,
    RequestOptionsArgs, Response, ConnectionBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BearerToken } from '../models/bearer-token.model';

@Injectable()
export class MyHttp extends Http {


    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    public request(req: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        const request = req as Request;

        if (request) {
            request.headers.append('Accept', 'application/json');
            request.headers.append('Content-Type', 'application/json');

            const rawToken = localStorage.getItem('bearer-token');
            if (rawToken) {
                const token = BearerToken.deserialize(JSON.parse(rawToken)).access_token;
                request.headers.append('Authorization', `Bearer ${token}`);
            }
            
            req = request;
        }
        return super.request(req, options);
    }
}