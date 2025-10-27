import { JogadorRepository } from "../../repositorios/JogadorRepository.js";
import { JogadorService } from "../../aplicacao/JogadorService.js";

const repo = new JogadorRepository();
const service = new JogadorService(repo);

export class JogadorController {
  static cadastrar(req, res) {
    try {
      const novo = service.cadastrar(req.body);
      res.status(201).json(novo);
    } catch (e) {
      res.status(400).json({ mensagem: e.message });
    }
  }

  static listar(req, res) {
    res.json(repo.listar());
  }
}