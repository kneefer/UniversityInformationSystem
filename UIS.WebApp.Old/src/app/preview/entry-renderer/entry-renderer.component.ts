import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { EntryViewModel } from '../../models/entry.model';
import { TokenViewModel } from '../../models/token.model';

@Component({
    selector: 'entry-renderer',
	template: `<div [innerHTML]="sanitizedHtmlContent"></div>`,
	encapsulation: ViewEncapsulation.None
})
export class EntryRendererComponent implements OnInit, OnChanges {

    @Input() public entry: EntryViewModel;

    private tokenFindRegex = /\$\((.*?)\)/g;

	constructor(
		private _sanitizer: DomSanitizer) { }

	public htmlContent: string;
	public get sanitizedHtmlContent(): SafeHtml {
		return this._sanitizer.bypassSecurityTrustHtml(this.htmlContent);
	}
    
    public ngOnInit(): void {
        this.htmlContent = '';
        this.render();
    }
    
    public ngOnChanges(changes: Object): void {
        this.render();
    }

    private render(): void {
        if (!this.entry) {
            return;
        }

        this.htmlContent = this.entry.htmlContent.replace(
            this.tokenFindRegex,
            (str, p1, offset, s) => this.getTokenValue(p1));
    }

    private getTokenValue(tokenName: string): string {
        return this.entry.tokens.filter(x => x.name === tokenName)[0].value;
    }
}