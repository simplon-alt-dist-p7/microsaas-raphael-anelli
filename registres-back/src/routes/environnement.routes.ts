import { Router } from "express";
import { environnementController } from "../controller/environnement.controller.ts";

const router = Router();

// Récupérer tous les environnements
router.get("/", environnementController.getAllEnvironnement);

export default router;