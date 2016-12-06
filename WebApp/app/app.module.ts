import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PanelAdminModule } from './panel-admin/panel-admin.module';
import { PanelUserModule } from './panel-user/panel-user.module';
import { PreviewModule } from './preview/preview.module'

import { CoreModule } from './core/core.module';
import { APP_CONFIG, AppConfig } from './app.config';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        PanelAdminModule,
        PanelUserModule,
        PreviewModule,
		CoreModule.forRoot(),

        RouterModule.forRoot([
            { path: 'login', loadChildren: './app/login/login.module#LoginModule' },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' }
		])
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: APP_CONFIG, useValue: AppConfig }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }