import express from "express";
const router = express.Router();

let jogadores = [
  {
    id: 1,
    nome: "Gabi",
    idade: 32,
    sexo: "F",
    categoria: "Profissional",
    email: "gabi@volei.com",
    senha: "123456"
  }
];

// RF.01 - Cadastrar jogador
router.post("/", (req, res) => {
  const { nome, idade, sexo, categoria, email, senha } = req.body;

  if (!nome || !idade || !sexo || !categoria || !email || !senha) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
  }

  const novo = { id: Date.now(), nome, idade, sexo, categoria, email, senha };
  jogadores.push(novo);

  res.status(201).json({ mensagem: "Jogador cadastrado com sucesso!", jogador: novo });
});

// RF.06 - Consultar perfil
router.get("/:id", (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);
  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }
  res.json(jogador);
});

// RF.07 - Editar perfil
router.patch("/:id", (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);
  if (!jogador) {
    return res.status(404).json({ mensagem: "Jogador não encontrado" });
  }

  Object.assign(jogador, req.body);
  res.json({ mensagem: `Perfil do jogador ${req.params.id} atualizado!`, jogador });
});

// RF.08 - Listar jogadores
router.get("/", (req, res) => {
  res.json(jogadores);
});

export { jogadores };
export default router;