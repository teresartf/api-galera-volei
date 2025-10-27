import { PartidaRepository } from "../../repositorios/PartidaRepository.js";
import { PartidaService } from "../../aplicacao/PartidaService.js";

const repo = new PartidaRepository();
const service = new PartidaService(repo);

export class PartidaController {
  static criar(req, res) {
    try {
      const partida = service.criarPartida(req.body);
      res.status(201).json(partida);
    } catch (e) {
      res.status(400).json({ mensagem: e.message });
    }
  }

  static listar(req, res) {
    res.json(repo.listar());
  }
}