import { Router } from "express";
import { universController } from "../controller/univers.controller.ts";

const router = Router();

// Récupérer tous les univers
router.get("/", universController.getAllUnivers);

export default router;