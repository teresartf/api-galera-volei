import express from "express";
import { AvaliacaoController } from "../controllers/AvaliacaoController.js";

const router = express.Router();

router.post("/", AvaliacaoController.avaliar);
router.get("/", AvaliacaoController.listar);

export default router;