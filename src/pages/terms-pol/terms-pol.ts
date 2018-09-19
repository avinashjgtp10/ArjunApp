import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LastNotePage } from '../last-note/last-note';

/**
 * Generated class for the TermsPolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-pol',
  templateUrl: 'terms-pol.html',
})
export class TermsPolPage {

  constructor(public navCtrl: NavController,public alertCont: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
const termsAndPolicyAlert = this.alertCont.create({
  title: 'Terms And Policies',
  subTitle: 'Terms And Policies',
  buttons:['No', 'Agree']
})
    termsAndPolicyAlert.present();
    
  }

  lastNote(){
    this.navCtrl.push(LastNotePage);
  }

}
