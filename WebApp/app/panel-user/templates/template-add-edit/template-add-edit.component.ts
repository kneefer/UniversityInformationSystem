import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { PageTitleService } from '../../../core/page-title.service';

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
    @Output() public showPreviewClicked = new EventEmitter<TemplateViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public processedTemplate: TemplateViewModel;
    public processedTemplateTokens: Array<TokenViewModel>;

    constructor(
        private pageTitleService: PageTitleService) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next(`${this.template ? 'Edit' : 'Add'} template`);
        this.processedTemplate = this.template
            ? JSON.parse(JSON.stringify(this.template)) as TemplateViewModel
            : new TemplateViewModel();
        this.processedTemplateTokens = this.processedTemplate.tokens;
    }

    private unifyModels(): void {
        this.processedTemplate.tokens = this.processedTemplateTokens;
    }

    private onClickAddToken(): void {
        this.processedTemplateTokens.push(new TokenViewModel());
    }

    private onTokenRemove(token: TokenViewModel): void {
        this.processedTemplateTokens = this.processedTemplateTokens.filter(x => x !== token);
    }

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.unifyModels();
        this.saveClicked.emit(this.processedTemplate);
    }

    private onShowPreviewClick(event: Event): void {
        event.preventDefault();
        this.unifyModels();
        this.showPreviewClicked.emit(this.processedTemplate);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}