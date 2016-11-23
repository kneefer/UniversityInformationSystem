import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { PanelAdminService } from '../panel-admin.service';
import { PageTitleService } from '../../core/page-title.service';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'users.html',
    styleUrls: ['users.css']
})
export class PanelAdminUsersComponent implements OnInit {

    public users = new Array<User>();
    public selectedUser: User;

    constructor(
        private panelAdminService: PanelAdminService,
        private pageTitleService: PageTitleService,
        private router: Router) { }

    private onUserClicked(user: User) {
        console.log(`Selected user: ${user.getFullName()}`);
        this.selectedUser = user;
        this.router.navigate(['paneladmin', 'users', user.userName]);
    }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Panel Admin - Users');

        this.users.push(new User('1', 'Adam', 'Kowalski', 'adakow123', 'akow@fdsf.com', 'nothing'));
        this.users.push(new User('2', 'Tomasz', 'Nowak', 'tomnow354', 'sdffd@fdsf.com', ''));
        this.users.push(new User('3', 'Jarosław', 'Paduch', 'jaropad3434', 'df3@fd.com', ''));
        this.users.push(new User('4', 'Agnieszka', 'Debudaj', 'agadebu34', 'df@df.com', 'description'));
        this.users.push(new User('5', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('6', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('7', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('8', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('9', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('10', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('11', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('12', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('13', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('14', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
        this.users.push(new User('15', 'Wojciech', 'Jeziorski', 'wojcjez3434', 'sdfdf@com.com', ''));
    }
}