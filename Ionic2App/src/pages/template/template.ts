import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Template page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-template',
  templateUrl: 'template.html'
})
export class TemplatePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TemplatePage Page');
  }

}
