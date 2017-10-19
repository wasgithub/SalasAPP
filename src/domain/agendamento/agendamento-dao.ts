import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Agendamento } from './agendamento';

@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage){}

    //gera key para salvar no storage
    private _getkey(agendamento: Agendamento){
        return agendamento.email + agendamento.data.substr(0,10);
    }

    //salva agendamento no storage
    save(agendamento: Agendamento){
        let key = this._getkey(agendamento);
        return this._storage.set(key, agendamento);
    }

    checkExist(agendamento: Agendamento){
        let key = this._getkey(agendamento);
        return this._storage
            .get(key)
            .then(dado => {
                return dado ? true : false;
            });
    }
   
    
}