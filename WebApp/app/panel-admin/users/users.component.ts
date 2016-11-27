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

    public users = new Array<UserViewModel>();
    public selectedUser: UserViewModel;
    public isEditMode = false;

    public tablets = new Array<TabletViewModel>();

    constructor(
        private panelAdminService: PanelAdminService,
        private pageTitleService: PageTitleService,
        private router: Router) { }

    private onUserClicked(user: UserViewModel) {
        console.log(`Selected user: ${user.getFullName()}`);
        this.selectedUser = user;
        //this.router.navigate(['paneladmin', 'users', user.id]);
    }

    private onTabletClicked(tablet: TabletViewModel) {
        console.log(`Selected tablet: ${tablet.getFullName()}`);
        //this.router.navigate(['paneladmin', 'tablets', tablet.id]);
    }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Panel Admin - Users');

        this.users.push(new UserViewModel('1', 'Adam', 'Kowalski', 'adakow123', 'akow@fdsf.com', 'nothing'));
        this.users.push(new UserViewModel('2', 'Tomasz', 'Nowak', 'tomnow354', 'sdffd@fdsf.com', ''));
        this.users.push(new UserViewModel('3', 'Jarosław', 'Paduch', 'jaropad3434', 'df3@fd.com', ''));
        this.users.push(new UserViewModel('4', 'Agnieszka', 'Debudaj', 'agadebu34', 'df@df.com', 'description'));
        this.users.push(new UserViewModel('5', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new UserViewModel('6', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new UserViewModel('7', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new UserViewModel('8', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new UserViewModel('9', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));

        this.tablets.push(new TabletViewModel('1', '201', 'descript'));
        this.tablets.push(new TabletViewModel('3', '634', ''));
        this.tablets.push(new TabletViewModel('2', '123', 'fsfsdf'));
        this.tablets.push(new TabletViewModel('4', '652', 'sdf'));
        this.tablets.push(new TabletViewModel('5', '234', 'df'));
        this.tablets.push(new TabletViewModel('6', '564', ''));
    }
}