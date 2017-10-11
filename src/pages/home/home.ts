import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EscolhaPage } from "../escolha/escolha";

import { Sala } from '../../domain/sala/sala'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  public salas: Sala[];
  constructor(public navCtrl: NavController) {}

  ngOnInit(): void {
    this.salas = [
      {nome: 'Sala 01', preco:50},
      {nome: 'Sala 02', preco:70},
      {nome: 'Sala 03', preco:40},
      {nome: 'Sala 04', preco:30},
      {nome: 'Sala 05', preco:65},
      {nome: 'Sala 06', preco:75},
      {nome: 'Sala 07', preco:85},
    ]
  }

  selecionaSala(sala){
    this.navCtrl.push(EscolhaPage, {salaSelecionada: sala})
  }
}
