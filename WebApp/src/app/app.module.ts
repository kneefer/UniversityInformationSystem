import { NgModule, ValueProvider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions, Http, XHRBackend } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { PanelAdminModule } from './panel-admin/panel-admin.module';
import { PanelUserModule } from './panel-user/panel-user.module';
import { PreviewModule } from './preview/preview.module';

import { CoreModule } from './core/core.module';
import { APP_CONFIG, WindowWrapper, AppConfig, LocalAppConfig } from './app.config';

import { MyHttp } from './common/MyHttp';

export function httpFactory(xhr: XHRBackend, req: RequestOptions, router: Router) {
 return new MyHttp(xhr, req, router);
}

export function getWindow() {
 return window;
}

export function appConfigFactory() {
    return environment.production 
        ? AppConfig
        : LocalAppConfig;
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        PanelAdminModule,
        PanelUserModule,
        PreviewModule,
        CoreModule.forRoot(),

        RouterModule.forRoot([
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
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
            useFactory: appConfigFactory
        },
        {
            provide: WindowWrapper,
            useFactory: getWindow
        },
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions, Router]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }