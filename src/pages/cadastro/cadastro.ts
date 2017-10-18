import { HomePage } from './../home/home';
import { Sala } from './../../domain/sala/sala';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { Agendamento } from './../../domain/agendamento/agendamento';

@IonicPage()
@Component({
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public sala: Sala;
  public precoTotal: number;

  public agendamento: Agendamento;
  private _alert: Alert;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController) {

    this.sala = navParams.get('sala');
    this.precoTotal = navParams.get('precoTotal');

    this.agendamento = new Agendamento(this.sala, this.precoTotal)

    this._alert = this._alertCtrl.create({
      title: 'Aviso', 
      buttons: [{text: 'Ok'}]
    });
    
  }

  agenda(){
    //this._http.post('api')

    if(!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Necessario preencher todas as informações',
        buttons: [{text: 'Ok'}]
      }).present();

      return;
    }
    this._alert.setTitle('Agendamento realizado com sucesso..');
    this._alert.present();
    this.navCtrl.setRoot(HomePage);
    
    
    
  }

}
