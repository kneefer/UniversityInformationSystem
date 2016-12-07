import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PageTitleService } from '../../core/page-title.service';
import { PanelAdminService } from '../panel-admin.service';

import { UserViewModel } from '../../models/user.model';
import { TabletViewModel } from '../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'tablets.html',
    styleUrls: ['tablets.css']
})
export class PanelAdminTabletsComponent implements OnInit {

    public masonryOptions = {
        itemSelector: '.masonry-brick',
        stamp: '.stamp'
    }

    public tablets: Array<TabletViewModel>;
    public selectedTablet: TabletViewModel;

    public isEditMode = false;
    public isAddMode = false;
    public isBindMode = false;

    public users: Array<UserViewModel>;
    public allUsers: Array<UserViewModel>;

    constructor(
        private pageTitleService: PageTitleService,
        private panelAdminService: PanelAdminService,
        private router: Router,
        private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Panel Admin - Tablets');
        this.refresh();
    }

    //#region Toggles

    private toggleAddMode(event?: Event) {
        if (event) {
            event.preventDefault();
        }
        this.isAddMode = !this.isAddMode;
    }

    private toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    private toggleBindMode() {
        if (!this.isBindMode) {
            this.panelAdminService.getUsers()
                .subscribe(
                users => {
                    this.allUsers = users;
                    this.isBindMode = !this.isBindMode;
                },
                error => this.notifyError(error)
                );
        } else {
            this.isBindMode = !this.isBindMode;
        }
    }

    //#endregion Toggles

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
        this.isBindMode = false;
    }

    private refresh() {
        this.returnToStandardMode();
        this.selectedTablet = null;
        this.users = null;
        this.panelAdminService.getTablets().subscribe(
            tablets => {
                this.tablets = tablets;
                this.route.params.subscribe(next => {
                    this.onTabletClicked(this.tablets.filter(x => x.id === next['id'])[0]);
                });
            },
            error => this.notifyError(error)
        );
    }

    private onTabletClicked(tablet: TabletViewModel) {
        this.selectedTablet = tablet;
        this.returnToStandardMode();
        this.panelAdminService.getUsersOfTablet(tablet).subscribe(
            users => this.users = users,
            error => this.notifyError(error)
        );
    }

    private onUserClicked(user: UserViewModel) {
        this.router.navigate(['paneladmin', 'users', user.id]);
    }

    private onTabletAdd(tablet: TabletViewModel) {
        this.panelAdminService.addTablet(tablet).subscribe(
            data => {
                this.notifyInfo('New tablet added');
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onTabletSave(tablet: TabletViewModel) {
        this.panelAdminService.editTablet(tablet).subscribe(
            data => {
                this.notifyInfo(`Tablet ${tablet.getFullName()} modified.`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onSelectedTabletDelete() {
        const tablet = this.selectedTablet;
        this.panelAdminService.deleteTablet(this.selectedTablet).subscribe(
            data => {
                this.notifyInfo(`Tablet ${tablet.getFullName()} deleted.`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onBindTabletWithUser(user: UserViewModel) {
        const tablet = this.selectedTablet;
        this.isBindMode = false;
        this.panelAdminService.bindTabletWithUser(tablet, user).subscribe(
            data => {
                this.notifyInfo(`Tablet ${tablet.getFullName()} bound to user ${user.getFullName()}.`);
                this.onTabletClicked(tablet);
            },
            error => this.notifyError(error)
        );
    }

    private onDeleteBinding(user: UserViewModel) {
        const tablet = this.selectedTablet;
        this.isBindMode = false;
        this.panelAdminService.unbindTabletFromUser(tablet, user).subscribe(
            data => {
                this.notifyInfo(`Tablet ${tablet.getFullName()} unbound from user ${user.getFullName()}.`);
                this.onTabletClicked(tablet);
            },
            error => this.notifyError(error)
        );
    }
}