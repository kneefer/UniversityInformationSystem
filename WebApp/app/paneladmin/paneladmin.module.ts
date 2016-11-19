import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PanelAdminTabletsComponent } from './tablets/tablets.component';
import { PanelAdminUsersComponent } from './users/users.component';

import { PanelAdminService } from './paneladmin.service';

@NgModule({
    declarations: [
        PanelAdminTabletsComponent,
        PanelAdminUsersComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'paneladmin/users', component: PanelAdminUsersComponent },
            { path: 'paneladmin', redirectTo: 'paneladmin/users' },
        ])
    ],
    providers: [
        PanelAdminService
    ]
})
export class PanelAdminModule {}