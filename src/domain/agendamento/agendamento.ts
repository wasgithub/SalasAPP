import { Sala }  from '../sala/sala'

export class Agendamento {

    constructor(
        public sala: Sala = null,
        public valor: number = 0,
        public nome: string = '',
        public endereco: string = '',
        public email: string = '',
        public data: string = new Date().toISOString(),
        public confirmado: boolean = false
    ){}
}