import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PanelAdminModule } from './paneladmin/paneladmin.module';
import { PanelUserModule } from './paneluser/paneluser.module';
import { CoreModule } from './core/core.module';
import { APP_CONFIG, AppConfig } from './app.config'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        PanelAdminModule,
		PanelUserModule,
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