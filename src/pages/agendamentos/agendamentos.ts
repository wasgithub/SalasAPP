import { AgendamentoDao } from './../../domain/agendamento/agendamento-dao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Agendamento } from '../../domain/agendamento/agendamento';

@IonicPage()
@Component({
  selector: 'page-agendamentos',
  templateUrl: 'agendamentos.html',
})
export class AgendamentosPage {

  public agendamentos: Agendamento[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _dao: AgendamentoDao) {

      this._dao
        .listAll()
        .then(agendamentos => this.agendamentos = agendamentos);
  }


}
