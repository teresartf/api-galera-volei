import { jogadores } from "../data/database.js";

export class JogadorRepository {
    listar(){
        return jogadores;
    }

    buscarPorId(id){
        id = Number(id);

        for(let i = 0; i < partidas.length; i++){
            if(partidas[i].id === id){
                return partidas[i];
            }
        }
        return null;
    }

    criar(jogador){
        jogadores.push(jogador);
        return jogador;
    }

    atualizar(id, dados){
        const jogador = this.buscarPorId(id);
    }

    remover(id){
        const jogador = this.buscarPorId(id);
        if(jogador){
            const index = jogadores.indexOf(jogador);
            jogadores.splice(index, 1);
        }
    }
}