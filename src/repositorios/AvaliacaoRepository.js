import { avaliacoes } from "../data/database.js";

export class AvaliacaoRepository {
    criar(avaliacao){
        avaliacoes.push(avaliacao);
        return avaliacao;
    }

    listar(tipo){
        let resultado = [];

        for(let i = 0; i< avaliacoes.length; i++){
            if(!tipo || avaliacoes[i].tipo == tipo){
                resultado.push(avaliacoes[i]);
            }
        }
        return resultado;
    }
}