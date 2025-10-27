import { AvaliacaoRepository } from "../../repositorios/AvaliacaoRepository.js";
import { AvaliacaoService } from "../../aplicacao/AvaliacaoService.js";

const repo = new AvaliacaoRepository();
const service = new AvaliacaoService(repo);

export class AvaliacaoController {
  static avaliar(req, res) {
    try {
      const avaliacao = service.avaliar(req.body);
      res.status(201).json(avaliacao);
    } catch (e) {
      res.status(400).json({ mensagem: e.message });
    }
  }

  static listar(req, res) {
    const { tipo } = req.query;
    res.json(repo.listar(tipo));
  }
}