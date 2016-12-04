import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

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

    public ngOnInit(): void {
        this.entry = new EntryViewModel();
    }

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.saveClicked.emit(this.entry);
    }

    private onShowPreviewClick(event: Event): void {
        event.preventDefault();
        this.showPreviewClicked.emit(this.entry);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}