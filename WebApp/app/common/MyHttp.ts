import { Injectable, Inject } from '@angular/core';
import {
    RequestOptions, Http, XHRBackend, Request, Headers,
    RequestOptionsArgs, Response, ConnectionBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
            req = request;
        }
        return super.request(req, options);
    }
}