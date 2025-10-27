import express from "express";
import jogadoresRoutes from "./apresentacao/routes/jogadoresRoutes.js";
import partidasRoutes from "./apresentacao/routes/partidasRoutes.js";
import avaliacoesRoutes from "./apresentacao/routes/avaliacoesRoutes.js";
import authRoutes from "./apresentacao/routes/authRoutes.js";

const app = express(); 
app.use(express.json());

// Rotas
app.use("/jogadores", jogadoresRoutes);
app.use("/partidas", partidasRoutes);
app.use("/avaliacoes", avaliacoesRoutes);
app.use("/", authRoutes);

export default app;
