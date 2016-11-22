import { Component, OnInit } from '@angular/core';

import { PanelAdminService } from '../paneladmin.service';
import { PageTitleService } from '../../core/pagetitle.service';

declare var module: {
    id: string;
}

export class User {

    constructor(
        public firstName: string,
        public lastName: string) { }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

@Component({
    moduleId: module.id,
    templateUrl: 'users.component.html'
})
export class PanelAdminUsersComponent implements OnInit {

    public users = new Array<User>();

    constructor(
        private panelAdminService: PanelAdminService,
        private pageTitleService: PageTitleService) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Panel Admin - Users');

        this.users.push(new User('Adam', 'Kowalski'));
        this.users.push(new User('Tomasz', 'Nowak'));
        this.users.push(new User('Jarosław', 'Paduch'));
        this.users.push(new User('Agnieszka', 'Debudaj'));
        this.users.push(new User('Wojciech', 'Jeziorski'));
    }
}