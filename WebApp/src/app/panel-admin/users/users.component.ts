import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PageTitleService } from '../../core/page-title.service';
import { PanelAdminService } from '../panel-admin.service';

import { UserViewModel } from '../../models/user.model';
import { TabletViewModel } from '../../models/tablet.model';

import { AngularMasonry } from 'angular2-masonry';

@Component({
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})
export class PanelAdminUsersComponent implements OnInit {

    @ViewChild('tabletsMasonry') private tabletsMasonry: AngularMasonry;
    @ViewChild('usersMasonry') private usersMasonry: AngularMasonry;

    public masonryOptions = {
        itemSelector: '.masonry-brick',
        stamp: '.stamp'
    }

    public users: Array<UserViewModel>;
    public selectedUser: UserViewModel;

    public isEditMode = false;
    public isAddMode = false;
    public isBindMode = false;

    public tablets: Array<TabletViewModel>;
    public allTablets: Array<TabletViewModel>;

    constructor(
        private pageTitleService: PageTitleService,
        private panelAdminService: PanelAdminService,
        private router: Router,
        private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Users Management');
        this.refresh();
    }

    //#region Toggles

    private reloadTabletsMasonry() {
        this.tabletsMasonry.ngOnDestroy();
        setTimeout(() => this.tabletsMasonry.ngOnInit(), 50);
    }

    private reloadUsersMasonry() {
        this.usersMasonry.ngOnDestroy();
        setTimeout(() => this.usersMasonry.ngOnInit(), 50);
    }

    private toggleAddMode(event?: Event) {
        if (event) {
            event.preventDefault();
        }
        this.isAddMode = !this.isAddMode;
        this.reloadUsersMasonry();
    }

    private toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    private toggleBindMode(event?: Event) {
        if (!event) // Workaround (not known issue)
            return;

        if (!this.isBindMode) {
            this.panelAdminService.getTablets()
                .subscribe(
                    tablets => {
                        this.allTablets = tablets;
                        this.isBindMode = !this.isBindMode;
                        this.reloadTabletsMasonry();
                    },
                    error => this.notifyError(error)
                );
        } else {
            this.isBindMode = !this.isBindMode;
            this.reloadTabletsMasonry();
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
        this.selectedUser = null;
        this.tablets = null;
        this.panelAdminService.getUsers().subscribe(
            users => {
                this.users = users;
                this.route.params.subscribe(next => {
                    this.onUserClicked(this.users.filter(x => x.id === next['id'])[0]);
                });
            },
            error => this.notifyError(error)
        );
    }

    private onUserClicked(user: UserViewModel) {
        if (user === undefined)
            return;

        this.selectedUser = user;
        this.returnToStandardMode();
        this.panelAdminService.getTabletsOfUser(user).subscribe(
            tablets => this.tablets = tablets,
            error => this.notifyError(error)
        );
    }

    private onTabletClicked(tablet: TabletViewModel) {
        this.router.navigate(['paneladmin', 'tablets', tablet.id]);
    }

    private onUserAdd(user: UserViewModel) {
        this.panelAdminService.addUser(user).subscribe(
            data => {
                this.notifyInfo('New user added'); 
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onUserSave(user: UserViewModel) {
        this.panelAdminService.editUser(user).subscribe(
            data => {
                this.notifyInfo(`User ${user.getFullName()} modified.`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onSelectedUserDelete() {
        const user = this.selectedUser;
        this.panelAdminService.deleteUser(this.selectedUser).subscribe(
            data => {
                this.notifyInfo(`User ${user.getFullName()} deleted.`);
                this.refresh();
            },
            error => this.notifyError(error)
        );
    }

    private onBindUserWithTablet(tablet: TabletViewModel) {
        const user = this.selectedUser;
        this.isBindMode = false;
        this.panelAdminService.bindTabletWithUser(tablet, user).subscribe(
            data => {
                this.notifyInfo(`User ${user.getFullName()} bound to tablet ${tablet.getFullName()}.`);
                this.onUserClicked(user);
            },
            error => this.notifyError(error)
        );
    }

    private onDeleteBinding(tablet: TabletViewModel) {
        const user = this.selectedUser;
        this.isBindMode = false;
        this.panelAdminService.unbindTabletFromUser(tablet, user).subscribe(
            data => {
                this.notifyInfo(`User ${user.getFullName()} unbound from tablet ${tablet.getFullName()}.`);
                this.onUserClicked(user);
            },
            error => this.notifyError(error)
        );
    }
}