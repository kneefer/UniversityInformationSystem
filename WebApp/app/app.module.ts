import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PanelAdminModule } from './paneladmin/paneladmin.module';
import { PanelUserModule } from './paneluser/paneluser.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        PanelAdminModule,
        PanelUserModule,

        RouterModule.forRoot([
            { path: 'login', loadChildren: '.app/login/login.module' },
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: '**', redirectTo: '/login', pathMatch: 'full' }
        ]),
        
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}