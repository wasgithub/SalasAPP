import { AgendamentoDao } from './../../domain/agendamento/agendamento-dao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    private _dao: AgendamentoDao,
    private _toast: ToastController) {

  }

  ionViewDidEnter() {
    this._dao
    .listAll()
    .then(agendamentos => this.agendamentos = agendamentos);
    console.log(this.agendamentos);
  }

  deletar(agendamento: Agendamento, i) {
    this._dao
    .delete(agendamento)
    .then(() => {
      this._toast.create({message: 'Agendamento removido com sucesso..', 
                            duration:3000, position: 'botton'}).present();
                            this.agendamentos.splice(i, 1)});
  }
}
