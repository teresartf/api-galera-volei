import { AuthRepository } from "../../repositorios/AuthRepository.js";
import { AuthService } from "../../aplicacao/AuthService.js";

const repo = new AuthRepository();
const service = new AuthService(repo);

export class AuthController {
  static login(req, res) {
    const { email, senha } = req.body;
    try {
      const jogador = service.login(email, senha);
      res.status(200).json({ mensagem: "Login realizado com sucesso!", jogador });
    } catch (e) {
      res.status(400).json({ mensagem: e.message });
    }
  }
}