import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { PageTitleService } from '../core/page-title.service';
import { PreviewService } from './preview.service';

import { EntryViewModel } from '../models/entry.model';
import { TokenViewModel } from '../models/token.model';

@Component({
	templateUrl: 'preview.component.html'
})
export class PreviewComponent implements OnInit {

	public entry: EntryViewModel;
	public lastUpdateDate: Date = null;

    constructor(
        private pageTitleService: PageTitleService,
        private route: ActivatedRoute,
        private previewService: PreviewService) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('');

        this.route.params.subscribe(params => {
            this.initialize(params);
        });
    }

    //#region Notify

    private notifyError(error: any) {
        console.log(error);
    }

    private notifyInfo(info: any) {
        console.log(info);
    }

    //#endregion Notify

    private initialize(params: Params) {
        const id: string = params['id'];
		const guid: string = params['guid'];

        let func: Observable<EntryViewModel>;

        if (id) {
            func = this.previewService.getTabletContent(id);
        } else if (guid) {
            func = this.previewService.getPreview(guid);
        } else {
            throw 'Not definied both id and guid as route parameters';
		}

		Observable.timer(0, 30000) // Refresh every 30 seconds
			.mergeMap(x => func)
			.subscribe(entry => {
				this.entry = entry;
				this.lastUpdateDate = new Date(Date.now());
			}, error => {
				this.notifyError(error);
			});
    }
}