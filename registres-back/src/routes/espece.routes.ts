import { Router } from "express";
import { especeController } from "../controller/espece.controller.ts";

const router = Router();

// Récupérer toutes les espèces
router.get("/", especeController.getAllEspeces);

export default router;