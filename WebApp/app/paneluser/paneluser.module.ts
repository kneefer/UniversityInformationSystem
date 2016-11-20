import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module/';

import { PanelUserTabletsComponent } from './tablets/tablets.component';
import { PanelUserService } from './paneluser.service';

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