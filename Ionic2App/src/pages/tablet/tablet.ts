import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TemplatePage } from '../template/template'

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

  tablet: any
  templates: Array<{id: number, name: string, description: string}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tablet = navParams.get('tablet');
    this.templates = []
    for(var i=0; i<5 ; i++) 
      this.templates.push({
        id: i,
        name: "Example " + i,
        description: "short description of template"
      })
  }

  ionViewDidLoad() {
    console.log('Hello TabletPage Page');
  }

  showTemplate(event, template) {
    this.navCtrl.push(TemplatePage, {
      template: template
    });
  }

}
