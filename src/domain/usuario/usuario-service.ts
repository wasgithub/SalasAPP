import { Usuario } from './usuario';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService{

    private _usuarioLogado: Usuario;

    constructor(private _http: Http){}

    public login(email: string, senha:string){
        //logica de enviao com http
        let api = `https://aluracar.herokuapp.com/login?email=${email}&senha=${senha}`;
        return this._http
        .get(api)
        .map(res => res.json().usuario)
        .toPromise()
        .then(dado => {
            let usuario = new Usuario(dado.nome, dado.dataNascimento, dado.email, dado.telefone);
            this._usuarioLogado = usuario;
        });
    }

    getUsuarioLogado(){
        return this._usuarioLogado;
    }

}