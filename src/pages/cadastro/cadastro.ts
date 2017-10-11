import { Sala } from './../../domain/sala/sala';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public sala: Sala;
  public precoTotal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sala = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');
  }

}
