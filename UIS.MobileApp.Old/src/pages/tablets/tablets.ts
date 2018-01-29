import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../providers/api-service';

import { TabletViewModel } from '../../models/tablet-model';
import { TemplatesPage } from '../templates/templates'

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

  tablets: Array<TabletViewModel>;

  constructor(public navCtrl: NavController, public api: ApiService) {
    this.api.getTablets().subscribe(
      tablets => { this.tablets = tablets; console.log(this.tablets) },
      error => console.log(error)
    );
    console.log(this.tablets);
  }

  ionViewDidLoad() {
    console.log('Hello TabletsPage Page');
  }

  showTemplates(event, tablet) {
    this.navCtrl.push(TemplatesPage, {
      tablet: tablet
    });
  }

}
