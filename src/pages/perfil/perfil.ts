import { UsuarioService } from './../../domain/usuario/usuario-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _service: UsuarioService) {
  }

  get usuarioLogado(){
      return this._service.getUsuarioLogado();
  }
}
