import express from "express";
import { JogadorController } from "../controllers/JogadorController.js";

const router = express.Router();

router.post("/", JogadorController.cadastrar);
router.get("/", JogadorController.listar);

export default router;