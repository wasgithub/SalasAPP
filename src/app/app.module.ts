import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from './../pages/cadastro/cadastro';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { AgendamentoDao } from './../domain/agendamento/agendamento-dao';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LoginPage } from '../pages/login/login';
import { UsuarioService } from '../domain/usuario/usuario-service';
import { PerfilPage } from '../pages/perfil/perfil';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { ReservaDetalhesPage } from '../pages/reserva-detalhes/reserva-detalhes';

function provideStorage() {
  
  return new Storage({
    name: 'salasapp',
    storeName: 'agendamentos'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage,
    AboutPage,
    TabsPage,
    ReservaDetalhesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage,
    AboutPage,
    TabsPage,
    ReservaDetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendamentoService,
    AgendamentoDao,
    UsuarioService,
    { provide: Storage, useFactory: provideStorage },
    Vibration,
    Camera,
    DatePicker
  ]
})
export class AppModule {}
