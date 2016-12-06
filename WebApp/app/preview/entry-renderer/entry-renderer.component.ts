import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { EntryViewModel } from '../../models/entry.model';
import { TokenViewModel } from '../../models/token.model';

declare var module: { id: string; }

@Component({
    selector: 'entry-renderer',
    moduleId: module.id,
    template: `<div [innerHTML]="htmlContent"></div>`
})
export class EntryRendererComponent implements OnInit, OnChanges {

    @Input() public entry: EntryViewModel;

    private tokenFindRegex = /\$\((.*?)\)/g;

    public htmlContent: string;
    
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

        console.log(`New content: ${this.entry.htmlContent}`);
    }

    private getTokenValue(tokenName: string): string {
        return this.entry.tokens.filter(x => x.name === tokenName)[0].value;
    }
}