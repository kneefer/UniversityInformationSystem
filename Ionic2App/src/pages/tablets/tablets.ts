import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabletPage } from '../tablet/tablet'

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

  tablets: Array<{id:number, name: string, description: string}>

  constructor(public navCtrl: NavController) {
    this.tablets = []
    for(var i=0; i<10 ; i++) 
      this.tablets.push({
        id: i,
        name: (400+i).toString(),
        description: "short description of tablet"
      })
  }

  ionViewDidLoad() {
    console.log('Hello TabletsPage Page');
  }

  showTablet(event, tablet) {
    this.navCtrl.push(TabletPage, {
      tablet: tablet
    });
  }

}
