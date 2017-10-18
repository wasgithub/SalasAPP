import {  Http } from '@angular/http';
import { Agendamento } from './agendamento';

export class AgendamentoService {

    constructor(private _http: Http){}

    agendamento(agendamento: Agendamento){
        /*let api = '';
        return this._http
            .get(api)
            .toPromise()*/
    }
}