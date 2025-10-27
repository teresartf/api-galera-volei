import { Partida } from "../dominio/Partida.js";

export class PartidaService {
    constructor(repository){
        this.repository = repository;
    }

    criarPartida(dados){
        const {local, data, categoria} = dados;
        if(!local || !data || !categoria) throw new Error("Campos obrigatórios ausentes!");
        const partida = new Partida(Date.now(), local, data, categoria);
        return this.repository.criar(partida);
    }
}