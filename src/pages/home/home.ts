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
      {nome: 'Sala 01', preco:50, imgDir: 'assets/img/sala-reuniao.png'},
      {nome: 'Sala 02', preco:70, imgDir: 'assets/img/sala-reuniao.png'},
      {nome: 'Sala 03', preco:40, imgDir: 'assets/img/sala-reuniao.png'},
      {nome: 'Sala 04', preco:30, imgDir: 'assets/img/sala-reuniao.png'},
      {nome: 'Sala 05', preco:65, imgDir: 'assets/icon/sala-reuniao.png'},
      {nome: 'Sala 06', preco:75, imgDir: 'assets/img/sala-reuniao.png'},
      {nome: 'Sala 07', preco:85, imgDir: 'assets/img/sala-reuniao.png'},
    ]
  }

  selecionaSala(sala){
    this.navCtrl.push(EscolhaPage, {salaSelecionada: sala})
  }
}
