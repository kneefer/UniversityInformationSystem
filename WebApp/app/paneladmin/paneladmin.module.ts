import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/authguard.service'

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
		RouterModule.forChild([{
			path: 'paneladmin',
			canActivate: [ AuthGuard ],
			children: [
				{ path: 'tablets', component: PanelAdminTabletsComponent },
				{ path: 'users', component: PanelAdminUsersComponent },
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