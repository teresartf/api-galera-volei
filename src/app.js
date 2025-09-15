import express from "express";
import jogadoresRoutes from "../routes/jogadores.js";
import partidasRoutes from "../routes/partidas.js";
import avaliacoesRoutes from "../routes/avaliacoes.js";
import authRoutes from "../routes/autenticacao.js";

const app = express();
app.use(express.json());

// Rotas
app.use("/jogadores", jogadoresRoutes);
app.use("/partidas", partidasRoutes);
app.use("/avaliacoes", avaliacoesRoutes);
app.use("/", authRoutes);

export default app;
