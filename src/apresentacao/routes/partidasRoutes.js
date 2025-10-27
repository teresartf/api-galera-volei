import express from "express";
import { PartidaController } from "../controllers/PartidaController.js";

const router = express.Router();

router.post("/", PartidaController.criar);
router.get("/", PartidaController.listar);

export default router;