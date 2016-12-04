import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageTitleService } from '../../core/page-title.service';
import { PanelUserService } from '../panel-user.service';

import { TemplateViewModel } from '../../models/template.model';
import { TokenViewModel } from '../../models/token.model';
import { TabletViewModel } from '../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'templates.html',
    styleUrls: ['templates.css']
})
export class TemplatesComponent implements OnInit {

    public masonryOptions = {
        itemSelector: '.masonry-brick',
        stamp: '.stamp'
    }

    public templates: Array<TemplateViewModel>;
    public selectedTemplate: TemplateViewModel;

    public tablets: Array<TabletViewModel>;

    constructor(
        private pageTitleService: PageTitleService,
        private panelUserService: PanelUserService,
        private router: Router) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Panel user - templates');
        this.refresh();
    }

    //#region Notify

    private notifyError(error: any) {
        console.log(error);
    }

    private notifyInfo(info: any) {
        console.log(info);
    }

    //#endregion Notify

    private refresh() {
        this.selectedTemplate = null;
        this.templates = null;
        this.tablets = null;
        this.panelUserService.getTemplates().subscribe(
            templates => this.templates = templates,
            error => this.notifyError(error)
        );
    }

    private onTemplateAddClick() {
        
    }

    private onTemplateClicked(template: TemplateViewModel) {
        this.selectedTemplate = template;
        this.panelUserService.getTablets().subscribe(
            tablets => this.tablets = tablets,
            error => this.notifyError(error)
        );
    }

    private onSelectedTemplateEdit() {
        
    }

    private onTabletClicked(tablet: TabletViewModel) {
        
    }
}