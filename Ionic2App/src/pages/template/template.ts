import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  template: any
  tokens: Array<{id:number, name: string, value: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.template = navParams.get('template');
    this.tokens = []
    for(var i=0; i<5 ; i++) 
      this.tokens.push({
        id: i,
        name: "token_name" + i,
        value: "default_value" + i
      })
  }

  ionViewDidLoad() {
    console.log('Hello TemplatePage Page');
  }

  save() {
    
  }

}
