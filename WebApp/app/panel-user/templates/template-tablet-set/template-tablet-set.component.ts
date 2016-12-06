import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { PageTitleService } from '../../../core/page-title.service';

import { TabletViewModel } from '../../../models/tablet.model';
import { TemplateViewModel } from '../../../models/template.model';
import { EntryViewModel } from '../../../models/entry.model'
import { TokenViewModel } from '../../../models/token.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'template-tablet-set',
    templateUrl: 'template-tablet-set.html',
    styleUrls: ['template-tablet-set.css']
})
export class TemplateTabletSetComponent implements OnInit {

    @Input() public tablet: TabletViewModel;
    @Input() public template: TemplateViewModel;

    @Output() public saveClicked = new EventEmitter<EntryViewModel>();
    @Output() public showPreviewClicked = new EventEmitter<EntryViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public entry: EntryViewModel;
    public tokens: Array<TokenViewModel>;

    constructor(
        private pageTitleService: PageTitleService) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Set content on tablet');
        this.entry = EntryViewModel.generateFromTemplate(this.template);
        this.tokens = this.entry.tokens;
    }

    private unifyModels(): void {
        this.entry.tokens = this.tokens;
    }

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.unifyModels();
        this.saveClicked.emit(this.entry);
    }

    private onShowPreviewClick(event: Event): void {
        event.preventDefault();
        this.unifyModels();
        this.showPreviewClicked.emit(this.entry);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}