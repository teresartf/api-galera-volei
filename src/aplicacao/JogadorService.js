import { Jogador } from "../dominio/Jogador.js";

export class JogadorService {
    constructor(repository){
        this.repository = repository;
    }

    cadastrar(dados){
        const {nome, idade, sexo, categoria, email, senha} = dados;
        if(!nome || !idade || !sexo || !categoria || !email || !senha){
            throw new Error("Todos os campos são obrigatórios");
        }
        const novo = new Jogador(Date.now(), nome, idade, sexo, categoria, email, senha);
        return this.repository.criar(novo);
    }
}