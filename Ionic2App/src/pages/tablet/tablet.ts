import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tablet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tablet',
  templateUrl: 'tablet.html'
})
export class TabletPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabletPage Page');
  }

}
