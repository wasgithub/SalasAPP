import { HomePage } from './../home/home';
import { Sala } from './../../domain/sala/sala';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
    private _alertCtrl: AlertController,
    private _storage: Storage) {

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
    // set a key/value

    let key = this.agendamento.email + this.agendamento.data.substr(0,10);
    
    if(!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Necessario preencher todas as informações',
        buttons: [{text: 'Ok'}]
      }).present();

      return;
    }
    
    this.agendamento.confirmado = true;
    this._storage.set(key, this.agendamento);

    this._alert.setTitle('Agendamento realizado com sucesso..');
    this._alert.present();
    this.navCtrl.setRoot(HomePage);
    
    
    
  }

}
