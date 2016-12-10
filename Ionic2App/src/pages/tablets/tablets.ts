import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tablets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tablets',
  templateUrl: 'tablets.html'
})
export class TabletsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabletsPage Page');
  }

}
