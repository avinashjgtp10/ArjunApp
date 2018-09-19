import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LastNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-last-note',
  templateUrl: 'last-note.html',
})
export class LastNotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCont: AlertController) {
  }

  ionViewDidLoad() {
    const lastMsg = this.alertCont.create({
      title: 'Note',
      subTitle: 'LastNote',
      buttons:['ok']
    })
    lastMsg.present();
  }

}
