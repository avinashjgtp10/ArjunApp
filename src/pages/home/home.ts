import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TermsPolPage } from '../terms-pol/terms-pol';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alrtCntrl: AlertController) {

  }

  abtApp(){
    const appAlert = this.alrtCntrl.create({
      title: 'About',
      subTitle: 'Details of App',
      buttons: ['ok']
    });
    appAlert.present();
  }

  ctctDet(){
    const contactAlert = this.alrtCntrl.create({
      title: 'Contact',
      subTitle: 'Phone Number',
      buttons: ['ok']
    });
    contactAlert.present();
  }

  termsAndPolicy(){
    this.navCtrl.push(TermsPolPage);
  }

}
