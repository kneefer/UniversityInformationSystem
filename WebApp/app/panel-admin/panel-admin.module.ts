import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { IsAuthGuard } from '../core/isAuth.guard';
import { IsAdminGuard } from '../core/isAdmin.guard';

import { PanelAdminService } from './panel-admin.service';

import { PanelAdminTabletsComponent } from './tablets/tablets.component';
import { PanelAdminUsersComponent } from './users/users.component';

import { TabletAddEditComponent } from './tablets/tablet-add-edit/tablet-add-edit.component';
import { TabletUserBindComponent } from './tablets/tablet-user-bind/tablet-user-bind.component';
import { UserAddEditComponent } from './users/user-add-edit/user-add-edit.component';
import { UserTabletBindComponent } from './users/user-tablet-bind/user-tablet-bind.component';

@NgModule({
    declarations: [
        PanelAdminTabletsComponent,
        PanelAdminUsersComponent,

        TabletAddEditComponent,
        TabletUserBindComponent,
        UserAddEditComponent,
        UserTabletBindComponent
    ],
	imports: [
		SharedModule,
		RouterModule.forChild([{
			path: 'paneladmin',
			canActivate: [ IsAuthGuard, IsAdminGuard ],
			children: [
				{ path: 'tablets', component: PanelAdminTabletsComponent },
				{ path: 'tablets/:id', component: PanelAdminTabletsComponent },
				{ path: 'users', component: PanelAdminUsersComponent },
				{ path: 'users/:id', component: PanelAdminUsersComponent },
				{ path: '', redirectTo: 'users' },
				{ path: '**', redirectTo: 'users' }
			]
		}])
    ],
    providers: [
        PanelAdminService
    ]
})
export class PanelAdminModule { }