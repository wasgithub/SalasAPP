import { AgendamentoDao } from './../../domain/agendamento/agendamento-dao';
import { HomePage } from './../home/home';
import { Sala } from './../../domain/sala/sala';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DatePicker } from '@ionic-native/date-picker';
//import { Storage } from '@ionic/storage';

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
    //private _storage: Storage,
    private _dao: AgendamentoDao,
    private _vibration: Vibration,
    private _datePicker: DatePicker) {

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

   
    if(!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email){
      this._vibration.vibrate(500);
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Necessario preencher todas as informações',
        buttons: [{text: 'Ok'}]
      }).present();

      return;
    }
    this._dao.checkExist(this.agendamento)
        .then(existe => {
            if(existe) {
              this._alert.setTitle('Aviso');
               this._alert.setSubTitle('Esse agendamento já foi realizado, faça outro com dados diferentes..');
               this._alert.present();
               this.navCtrl.setRoot(HomePage);
            }
        })

        this.agendamento.confirmado = true;
        this._dao.save(this.agendamento);
        this._alert.setTitle('Agendamento realizado com sucesso..');
        this._alert.present();
        this.navCtrl.setRoot(HomePage);
  }

  selecionaData(){
    this._datePicker.show({
      date: new Date(),
      mode: 'date'
    })
    .then(
      date => {
        this.agendamento.data = date.toISOString();
      }
    )
  }

}
