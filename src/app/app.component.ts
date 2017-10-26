import { PerfilPage } from './../pages/perfil/perfil';
import { AgendamentosPage } from './../pages/agendamentos/agendamentos';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from './../pages/login/login';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  public paginas = [
    { titulo: 'Agendamentos', componente: AgendamentosPage, icon: 'calendar' },
    { titulo: 'Perfil', componente: PerfilPage, icon: 'person' },
    { titulo: 'Logout', componente: LoginPage, icon: 'log-out' },
    { titulo: 'Sobre', componente: AboutPage, icon: 'information-circle' }
  ];

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  openPage(pagina){
    this.nav.push(pagina.componente)
  }
  
}

