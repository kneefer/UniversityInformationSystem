import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module/';
import { AuthGuard } from '../core/auth-guard.service';

import { PanelUserService } from './panel-user.service';

import { PanelUserTabletsComponent } from './tablets/tablets.component';

@NgModule({
    declarations: [
        PanelUserTabletsComponent
    ],
    imports: [
		SharedModule,
		RouterModule.forChild([{
			path: 'paneluser',
			children: [
				{ path: 'tablets', component: PanelUserTabletsComponent },
				{ path: '', redirectTo: 'tablets' },
				{ path: '**', redirectTo: 'tablets' }
			]
		}])
    ],
    providers: [
		PanelUserService
    ]
})
export class PanelUserModule { }