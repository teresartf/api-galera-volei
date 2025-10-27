import { partidas } from "../data/database.js";

export class PartidaRepository {
  listar() {
    return partidas;
  }

  buscarPorId(id) {
    return partidas.find(p => p.id === Number(id));
  }

  criar(partida) {
    partidas.push(partida);
    return partida;
  }

  atualizar(id, dados) {
    const partida = this.buscarPorId(id);
    if (partida) Object.assign(partida, dados);
    return partida;
  }

  remover(id) {
    const index = partidas.findIndex(p => p.id === Number(id));
    if (index !== -1) partidas.splice(index, 1);
  }
}