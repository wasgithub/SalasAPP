import { Agendamento } from './../../domain/agendamento/agendamento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReservaDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva-detalhes',
  templateUrl: 'reserva-detalhes.html',
})
export class ReservaDetalhesPage {

  public agendamento: Agendamento;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

                this.agendamento = navParams.get('agendamentoSelecionado');
  }
}
