import { UsuarioService } from './../../domain/usuario/usuario-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string = 'joao@alura.com.br';
  public senha: string = 'alura123';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loginService: UsuarioService,
    private _alertCtrl: AlertController) {}

  login(){
    this._loginService.login(this.email, this.senha)
    .then(usuario => {
      console.log(usuario);
      this.navCtrl.setRoot(HomePage);
    })
    .catch(() => {
      this._alertCtrl.create({
        title: "Problema no login..",
        subTitle: "Usuario ou senha incorreto",
        buttons: [{text: 'Ok'}]
      }).present();
    });
  }

}
