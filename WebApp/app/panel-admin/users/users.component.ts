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

    public users = new Array<UserViewModel>();
    public selectedUser: UserViewModel;

    public isEditMode = false;
    public isAddMode = false;
    public isBindMode = false;

    public tablets = new Array<TabletViewModel>();
    public allTablets = this.tablets;

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
        this.isBindMode = !this.isBindMode;
    }

    private onUserClicked(user: UserViewModel) {
        this.selectedUser = user;
        this.isEditMode = false;
    }

    private onTabletClicked(tablet: TabletViewModel) {
        this.router.navigate(['paneladmin', 'tablets', tablet.id]);
    }

    private onUserAdd(user: UserViewModel) {
        
    }

    private onUserSave(user: UserViewModel) {
        
    }

    private onSelectedUserDelete() {
        
    }

    private onBindUserWithTablet(tablet: TabletViewModel) {
        
    }

    private onDeleteBinding(tablet: TabletViewModel) {
        
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