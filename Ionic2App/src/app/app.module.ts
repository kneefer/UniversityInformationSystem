import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabletsPage } from '../pages/tablets/tablets';
import { TabletPage } from '../pages/tablet/tablet';
import { TemplatePage } from '../pages/template/template';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabletsPage,
    TabletPage,
    TemplatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabletsPage,
    TabletPage,
    TemplatePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
