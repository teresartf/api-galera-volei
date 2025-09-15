import express from "express";
const router = express.Router();

let partidas = [
  {
    id: 1,
    local: "Quadra Central",
    data: "2025-09-20",
    categoria: "Amador",
    status: "Nova",
    participantes: [1, 2],
    pedidos: [{ id: 1, jogadorId: 3, status: "pendente" }]
  }
];

// RF.09 - Criar partida
router.post("/", (req, res) => {
  const nova = { id: Date.now(), ...req.body, participantes: [], pedidos: [] };
  partidas.push(nova);
  res.status(201).json({ mensagem: "Partida criada com sucesso!", partida: nova });
});

// RF.10 - Listar partidas
router.get("/", (req, res) => {
  res.json(partidas);
});

// RF.11 - Consultar partida
router.get("/:id", (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });
  res.json(partida);
});

// RF.12 - Editar partida
router.patch("/:id", (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });

  Object.assign(partida, req.body);
  res.json({ mensagem: `Partida ${req.params.id} atualizada!`, partida });
});

// RF.13 - Excluir partida
router.delete("/:id", (req, res) => {
  partidas = partidas.filter(p => p.id != req.params.id);
  res.json({ mensagem: `Partida ${req.params.id} excluída!` });
});

// RF.14 - Compartilhar partida
router.get("/:id/compartilhar", (req, res) => {
  res.json({ mensagem: `Link para compartilhar a partida ${req.params.id}`, link: `http://localhost:3000/partidas/${req.params.id}` });
});

// RF.15 - Alterar status
router.patch("/:id/status", (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });

  partida.status = req.body.status || partida.status;
  res.json({ mensagem: `Status da partida ${req.params.id} alterado!`, status: partida.status });
});

// RF.16 - Solicitar participação
router.post("/:id/participar", (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });

  const pedido = { id: Date.now(), jogadorId: req.body.jogadorId, status: "pendente" };
  partida.pedidos.push(pedido);
  res.status(201).json({ mensagem: `Solicitação para participar da partida ${req.params.id} enviada!`, pedido });
});

// RF.17 - Cancelar participação
router.delete("/:id/participar", (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });

  partida.pedidos = partida.pedidos.filter(p => p.jogadorId != req.body.jogadorId);
  res.json({ mensagem: `Participação na partida ${req.params.id} cancelada` });
});

// RF.18 - Aprovar/Rejeitar pedidos
router.patch("/:id/pedidos/:pedidoId", (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });

  const pedido = partida.pedidos.find(p => p.id == req.params.pedidoId);
  if (!pedido) return res.status(404).json({ mensagem: "Pedido não encontrado" });

  pedido.status = req.body.status || pedido.status;
  res.json({ mensagem: `Pedido ${req.params.pedidoId} da partida ${req.params.id} atualizado!`, pedido });
});

export default router;