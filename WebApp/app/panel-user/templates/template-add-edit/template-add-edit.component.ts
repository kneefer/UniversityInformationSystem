import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TemplateViewModel } from '../../../models/template.model';
import { TokenViewModel } from '../../../models/token.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'template-add-edit',
    templateUrl: 'template-add-edit.html',
    styleUrls: ['template-add-edit.css']
})
export class TemplateAddEditComponent implements OnInit {

    @Input() public template: TemplateViewModel;

    @Output() public saveClicked = new EventEmitter<TemplateViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public processedTemplate: TemplateViewModel;

    public ngOnInit(): void {
        this.processedTemplate = this.template
            ? JSON.parse(JSON.stringify(this.template)) as TemplateViewModel
            : new TemplateViewModel();
    }

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.saveClicked.emit(this.template);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}