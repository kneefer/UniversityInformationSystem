import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class PageTitleService {
    public name = new Subject<string>();
}