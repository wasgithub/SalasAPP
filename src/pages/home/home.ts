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
  public salaImg: Array<String>;

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit(): void {
    this.salas = [
      {nome: 'Sala 01', preco:50, imgDir: 'assets/img/salas/sala01.jpg', descricao: 'Descriçao sala 01', capacidade: 4 },
      {nome: 'Sala 02', preco:70, imgDir: 'assets/img/salas/sala02.jpg', descricao: 'Descriçao sala 02', capacidade: 10},
      {nome: 'Sala 03', preco:40, imgDir: 'assets/img/salas/sala03.jpg', descricao: 'Descriçao sala 03', capacidade: 6},
      {nome: 'Sala 04', preco:30, imgDir: 'assets/img/salas/sala01.jpg', descricao: 'Descriçao sala 04', capacidade: 4},
      {nome: 'Sala 05', preco:65, imgDir: 'assets/img/salas/sala02.jpg', descricao: 'Descriçao sala 05', capacidade: 10}
    ]
  }

  selecionaSala(sala){
    this.navCtrl.push(EscolhaPage, {salaSelecionada: sala})
  }
}
