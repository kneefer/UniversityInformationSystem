import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageTitleService } from '../../core/page-title.service';
import { PanelUserService } from '../panel-user.service';

import { TemplateViewModel } from '../../models/template.model';
import { EntryViewModel } from '../../models/entry.model';
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
    public selectedTablet: TabletViewModel;

    public isAddMode = false;
    public isEditMode = false;
    public isTabletSetMode = false;

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

    private returnToStandardMode() {
        this.isEditMode = false;
        this.isAddMode = false;
        this.isTabletSetMode = false;
    }

    private refresh() {
        this.returnToStandardMode();
        this.selectedTemplate = null;
        this.templates = null;
        this.tablets = null;
        this.panelUserService.getTemplates().subscribe(
            templates => this.templates = templates,
            error => this.notifyError(error)
        );
    }

    private onCancelClicked() {
        this.returnToStandardMode();
        this.selectedTablet = null;
    }

    private onTemplateAddClick() {
        this.isAddMode = true;
    }

    private onTemplateClicked(template: TemplateViewModel) {
        this.selectedTemplate = template;
        this.panelUserService.getTablets().subscribe(
            tablets => this.tablets = tablets,
            error => this.notifyError(error)
        );
    }

    private onSelectedTemplateEdit() {
        this.isEditMode = true;
    }

    private onTabletClicked(tablet: TabletViewModel) {
        this.isTabletSetMode = true;
        this.selectedTablet = tablet;
    }

    private onTemplateAdd(template: TemplateViewModel) {
        this.panelUserService.addTemplate(template).subscribe(
            data => {
                this.notifyInfo('New template added');
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onTemplateSave(template: TemplateViewModel) {
        this.panelUserService.editTemplate(template).subscribe(
            data => {
                this.notifyInfo(`Template ${template.getFullName()} modified.`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onAddEntryToTabletClicked(entry: EntryViewModel) {
        this.panelUserService.addEntryToTablet(entry, this.selectedTablet).subscribe(
            data => {
                this.notifyInfo(`New entry to tablet added.`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onShowPreviewClicked(entry: EntryViewModel) {
        this.panelUserService.addPreviewEntry(entry).subscribe(
            guid => {
                this.notifyInfo(`Preview generated: GUID: ${guid}.`);
                this.router.navigate(['paneluser', 'preview', guid]);
            },
            error => this.notifyError(error)
        );
    }
}