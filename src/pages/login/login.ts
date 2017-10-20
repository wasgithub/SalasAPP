import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  login(){
    this.navCtrl.setRoot(HomePage)
  }

}
