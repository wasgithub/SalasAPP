import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { Sala } from '../../domain/sala/sala';
import { Opcional } from '../../domain/sala/opcional';
import { CadastroPage } from './../cadastro/cadastro';

@Component({
    templateUrl: './escolha.html'
})
export class EscolhaPage {

    public sala: Sala;
    public opcionais: Opcional[];
    private _precoTotal: number;

    constructor(
        public navParams: NavParams, 
        public NavCtrl: NavController){
            
        this.sala = this.navParams.get('salaSelecionada');
        this._precoTotal = this.sala.preco;
        this.opcionais = [
            new Opcional('TV', 10),
            new Opcional('Projetor', 5),
            new Opcional('NoteBook', 15),
       ]
    }

    get precoTotal(){
        return this._precoTotal;
    }

    atualizaTotal(ligado: boolean, opcional: Opcional){
        ligado?
        this._precoTotal += opcional.preco:
        this._precoTotal -= opcional.preco;
    }

    avancaAgendamento(){
        this.NavCtrl.push(CadastroPage, {
            sala: this.sala,
            precoTotal: this._precoTotal})
    }

}