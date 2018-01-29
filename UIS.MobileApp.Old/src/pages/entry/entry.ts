import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ApiService } from '../../providers/api-service';
import { TabletsPage } from '../../pages/tablets/tablets';

import { TabletViewModel } from '../../models/tablet-model';
import { TemplateViewModel } from '../../models/template-model';
import { EntryViewModel } from '../../models/entry-model';

/*
  Generated class for the Entry page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html'
})
export class EntryPage {

  tablet: TabletViewModel;
  template: TemplateViewModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ApiService, public alertCtrl: AlertController) {
    this.tablet = navParams.get('tablet');
    this.template = navParams.get('template');
  }

  ionViewDidLoad() {
    console.log('Hello EntryPage Page');
  }

  addEntry() {
    let entry = EntryViewModel.generateFromTemplate(this.template);
    console.log(entry);
    this.api.addEntryToTablet(entry, this.tablet).subscribe(
      data => {
        this.showAlert('Success', 'Entry added');
        this.navCtrl.push(TabletsPage);
      },
      error => {
        this.showAlert('Error', 'Something went wrong'),
          console.log(error)
      }
    );
  }

  showAlert(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
