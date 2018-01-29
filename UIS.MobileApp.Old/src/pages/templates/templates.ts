import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../providers/api-service'
import { EntryPage } from '../entry/entry';
import { TabletViewModel } from '../../models/tablet-model';
import { TemplateViewModel } from '../../models/template-model';
/*
  Generated class for the Templates page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-templates',
  templateUrl: 'templates.html'
})
export class TemplatesPage {

  tablet: TabletViewModel;
  templates: Array<TemplateViewModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public api: ApiService) {
    this.tablet = navParams.get('tablet');
    this.api.getTemplates().subscribe(
      templates => { this.templates = templates; console.log(this.templates) },
      error => console.log(error)
    );
  }

  ionViewDidLoad() {
    console.log('Hello TemplatesPage Page');
  }

  showEntry(event, template) {
    this.navCtrl.push(EntryPage, {
      tablet: this.tablet,
      template: template
    });
  }

}
