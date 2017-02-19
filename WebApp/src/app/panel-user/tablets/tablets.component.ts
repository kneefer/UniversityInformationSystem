import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { PageTitleService } from '../../core/page-title.service';
import { PanelUserService } from '../panel-user.service';

import { UserViewModel } from '../../models/user.model';
import { TabletViewModel } from '../../models/tablet.model';
import { EntryViewModel } from '../../models/entry.model';
import { TemplateViewModel } from '../../models/template.model';

import { WindowWrapper } from '../../app.config'

@Component({
    templateUrl: 'tablets.component.html',
    styleUrls: ['tablets.component.css']
})
export class PanelUserTabletsComponent implements OnInit {

    public tablets: Array<TabletViewModel>;
    public selectedTablet: TabletViewModel;

    public entries: Array<EntryViewModel>;
    public templates: Array<TemplateViewModel>;

    constructor(
        private window: WindowWrapper,
        private pageTitleService: PageTitleService,
        private panelUserService: PanelUserService,
        private router: Router) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('My tablets');
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
        this.selectedTablet = null;
        this.entries = null;
        this.templates = null; 
        this.panelUserService.getTablets().subscribe(
            tablets => this.tablets = tablets,
            error => this.notifyError(error)
        );
    }

    private onTabletClicked(tablet: TabletViewModel) {
        this.selectedTablet = tablet;
        this.panelUserService.getEntriesOfTablet(tablet).subscribe(
            entries => this.entries = entries,
            error => this.notifyError(error)
        );
        this.panelUserService.getTemplates().subscribe(
            templates => this.templates = templates,
            error => this.notifyError(error)
        );
    }

    private onSelectedTabletGoToPage() {
        this.window.open(`/preview/tablet/${this.selectedTablet.id}`);
    }

    private onEntryClicked(entry: EntryViewModel) {
        entry.date = new Date(Date.now());

        this.panelUserService.addEntryToTablet(entry, this.selectedTablet).subscribe(
            data => {
                this.notifyInfo(`Entry based on ${entry.id} added`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onTemplateClicked(template: TemplateViewModel) {
        this.router.navigate(['paneluser', 'templates', template.id]);
    }
}