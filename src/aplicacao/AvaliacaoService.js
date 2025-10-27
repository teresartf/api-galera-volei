import { Avaliacao } from "../dominio/Avaliacao.js";

export class AvaliacaoService {
    constructor(repository){
        this.repository = repository;
    }

    avaliar(dados){
        const {ipo, remetenteId, destinatarioId, nota, comentario} = dados;
        if(!tipo || !remetenteId || !destinatarioId || !nota){
            throw new Error("Campos obrigatórios ausentes!");
        }

        const avaliacao = new Avaliacao(Date.now(), tipo, remetenteId, destinatarioId, nota, comentario);
        return this.repository.criar(avaliacao);
    }
}