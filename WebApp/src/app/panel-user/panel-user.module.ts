import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { IsAuthGuard } from '../core/isAuth.guard';
import { IsUserGuard } from '../core/isUser.guard';

import { PanelUserService } from './panel-user.service';

import { PanelUserTabletsComponent } from './tablets/tablets.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateAddEditComponent } from './templates/template-add-edit/template-add-edit.component';
import { TemplateTabletSetComponent } from './templates/template-tablet-set/template-tablet-set.component';

@NgModule({
    declarations: [
        PanelUserTabletsComponent,
        TemplatesComponent,
        TemplateAddEditComponent,
        TemplateTabletSetComponent
    ],
    imports: [
		SharedModule,
		RouterModule.forChild([{
            path: 'paneluser',
            canActivate: [IsAuthGuard, IsUserGuard],
			children: [
				{ path: 'tablets', component: PanelUserTabletsComponent },
				{ path: 'templates', component: TemplatesComponent },
				{ path: 'templates/:id', component: TemplatesComponent },
				{ path: '', redirectTo: 'tablets', pathMatch: 'prefix' },
				{ path: '**', redirectTo: 'tablets', pathMatch: 'prefix' }
			]
		}])
    ],
    providers: [
		PanelUserService
    ]
})
export class PanelUserModule { }