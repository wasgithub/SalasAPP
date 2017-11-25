import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaDetalhesPage } from './reserva-detalhes';

@NgModule({
  declarations: [
    ReservaDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservaDetalhesPage),
  ],
})
export class ReservaDetalhesPageModule {}
