import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserViewModel } from '../../models/user.model';
import { TabletViewModel } from '../../models/tablet.model';
import { PanelAdminService } from '../panel-admin.service';
import { PageTitleService } from '../../core/page-title.service';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'users.html',
    styleUrls: ['users.css']
})
export class PanelAdminUsersComponent implements OnInit {

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
        private panelAdminService: PanelAdminService,
        private pageTitleService: PageTitleService,
        private router: Router) { }

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
            this.panelAdminService.getTablets()
                .subscribe(
                    tablets => {
                        this.allTablets = tablets;
                        this.isBindMode = !this.isBindMode;
                    },
                    error => this.notifyError(error)
                );
        } else {
            this.isBindMode = !this.isBindMode;
        }
    }

    private notifyError(error: any) {
        console.log(error);
    }

    private notifyInfo(info: any) {
        console.log(info);
    }

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
            users => this.users = users,
            error => this.notifyError(error)
        );
    }

    private onUserClicked(user: UserViewModel) {
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
                this.notifyInfo(`UserViewModel ${user.getFullName()} modified.`);
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

    public ngOnInit(): void {
        this.refresh();
        this.pageTitleService.name.next('Panel Admin - Users');
    }
}