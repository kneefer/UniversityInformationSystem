import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RequestOptions, Http, XHRBackend } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabletsPage } from '../pages/tablets/tablets';
import { TemplatesPage } from '../pages/templates/templates';
import { EntryPage } from '../pages/entry/entry';
import { ApiService } from '../providers/api-service';
import { AuthService } from '../providers/auth-service';
import { SessionData } from '../providers/session-data';
import { MyHttp } from './my-http';
import { Storage } from '@ionic/storage';

export function httpFactory(xhr: XHRBackend, req: RequestOptions, session: SessionData) {
  return new MyHttp(xhr, req, session);
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabletsPage,
    TemplatesPage,
    EntryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabletsPage,
    TemplatesPage,
    EntryPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, SessionData]
    },
    Storage,
    ApiService,
    AuthService,
    SessionData

  ]
})
export class AppModule { }
