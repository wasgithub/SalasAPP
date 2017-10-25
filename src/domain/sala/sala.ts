export class Sala {
    constructor(
        public nome: string, 
        public preco: number, 
        public imgDir: string,
        public descricao: string = '',
        public capacidade: number = 1){}
}