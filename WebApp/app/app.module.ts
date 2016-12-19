import { NgModule, ValueProvider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions, Http, XHRBackend } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';

import { PanelAdminModule } from './panel-admin/panel-admin.module';
import { PanelUserModule } from './panel-user/panel-user.module';
import { PreviewModule } from './preview/preview.module'

import { CoreModule } from './core/core.module';
import { APP_CONFIG, WINDOW_PROVIDER, AppConfig } from './app.config';

import { MyHttp } from './common/MyHttp';

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
        {
            provide: APP_CONFIG,
            useValue: AppConfig
        },
        {
            provide: WINDOW_PROVIDER,
            useValue: window
        },
        {
            provide: Http,
            useFactory: (xhr: XHRBackend, req: RequestOptions, router: Router) =>
                new MyHttp(xhr, req, router),
            deps: [XHRBackend, RequestOptions, Router]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }