import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module/';
import { AuthGuard } from '../core/auth-guard.service';

import { PreviewComponent } from './preview.component';
import { EntryRendererComponent } from './entry-renderer/entry-renderer.component'
import { PreviewService } from './preview.service';

@NgModule({
    declarations: [
        PreviewComponent,
        EntryRendererComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'preview/guid/:guid', component: PreviewComponent },
            { path: 'preview/tablet/:id', component: PreviewComponent }
        ])
    ],
    providers: [
        PreviewService
    ]
})
export class PreviewModule { }