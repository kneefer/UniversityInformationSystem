import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { TabletsPage } from '../tablets/tablets';
import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = new LoginModel('', '');
  errorMsg = '';

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login() {
    this.errorMsg = null;
    let loader = this.loadingCtrl.create({ content: "Please wait..." });
    loader.present();
    this.authService.login(this.user)
      .subscribe(token => {
        this.navCtrl.setRoot(TabletsPage);
        loader.dismiss();
      }, error => {
        this.errorMsg = error === 'invalid_grant'
          ? 'Wrong username or password!'
          : 'Login problem';
        loader.dismiss();
        console.log(error.text);
      });
  }

}
