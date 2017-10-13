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

  public nome: string;
  public endereco: string;
  public email: string;
  public data: string = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sala = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');
  }

  agenda(){
    console.log(this.nome);
    console.log(this.endereco);
    console.log(this.email);
    console.log(this.data);
  }

}
