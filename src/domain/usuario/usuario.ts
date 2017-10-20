import { Injectable } from '@angular/core';

@Injectable()
export class Usuario {
    public usuario: string;
    public senha: string

    constructor(
        public nome: string, 
        public dataNascimento: string, 
        public email: string, 
        public telefone: string){
    }
}