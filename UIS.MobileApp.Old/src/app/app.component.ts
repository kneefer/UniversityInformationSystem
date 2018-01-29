import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { TabletsPage } from '../pages/tablets/tablets';
import { AuthService } from '../providers/auth-service';
import { SessionData } from '../providers/session-data';

import { BearerToken } from '../models/bearer-token-model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  constructor(public platform: Platform, public authService: AuthService, public storage: Storage, public session: SessionData) {
    this.initializeApp();

    storage.ready().then(() => {
      storage.get('bearer-token').then((rawToken) => {
        if (rawToken) {
          const token = BearerToken.deserialize(JSON.parse(rawToken));
          session.setToken(token);
          this.rootPage = TabletsPage;
        }
        else {
          this.rootPage = LoginPage;
        }
      })
    })

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getUserName(): string {
    const userName = this.session.getLoggedUserName();
    if (userName) return userName;
    return null;
  }

  logout() {
    this.authService.logout();
    this.nav.setRoot(LoginPage);
  }
}
