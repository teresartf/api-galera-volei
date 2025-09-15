import express from "express";
const router = express.Router();

let avaliacoesPartidas = [
  { id: 1, partidaId: 1, jogadorId: 1, nota: 9, comentario: "Ótima organização!" }
];

let avaliacoesJogadores = [
  { id: 1, avaliadorId: 1, avaliadoId: 2, nota: 8, comentario: "Bom desempenho" }
];

// RF.19 - Avaliar partida
router.post("/partida", (req, res) => {
  const { partidaId, jogadorId, nota, comentario } = req.body;

  if (!partidaId || !jogadorId || !nota) {
    return res.status(400).json({ mensagem: "partidaId, jogadorId e nota são obrigatórios" });
  }

  const nova = { id: Date.now(), partidaId, jogadorId, nota, comentario: comentario || "" };
  avaliacoesPartidas.push(nova);

  res.status(201).json({ mensagem: "Partida avaliada com sucesso!", avaliacao: nova });
});

// RF.20 - Avaliar jogadores
router.post("/jogador", (req, res) => {
  const { avaliadorId, avaliadoId, nota, comentario } = req.body;

  if (!avaliadorId || !avaliadoId || !nota) {
    return res.status(400).json({ mensagem: "avaliadorId, avaliadoId e nota são obrigatórios" });
  }

  const nova = { id: Date.now(), avaliadorId, avaliadoId, nota, comentario: comentario || "" };
  avaliacoesJogadores.push(nova);

  res.status(201).json({ mensagem: "Jogador avaliado com sucesso!", avaliacao: nova });
});

// RF.21 - Rankear partidas/jogadores
router.get("/", (req, res) => {
  const tipo = req.query.tipo || "todos";

  if (tipo === "partidas") return res.json(avaliacoesPartidas);
  if (tipo === "jogadores") return res.json(avaliacoesJogadores);

  res.json({ partidas: avaliacoesPartidas, jogadores: avaliacoesJogadores });
});

export default router;
