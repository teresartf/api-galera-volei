import { Router } from "express";
import { jogadores } from "./jogadores.js"; 

const router = Router();

// Login
router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: "Email e senha são obrigatórios!" });
  }

  const jogador = jogadores.find(j => j.email === email && j.senha === senha);

  if (!jogador) {
    return res.status(401).json({ mensagem: "Credenciais inválidas!" });
  }

  res.json({ mensagem: `Bem-vindo, ${jogador.nome}!`, jogadorId: jogador.id });
});

// Logout (simbólico)
router.post("/logout", (req, res) => {
  res.json({ mensagem: "Logout realizado com sucesso!" });
});

export default router;