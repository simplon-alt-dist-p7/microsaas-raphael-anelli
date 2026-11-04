import { Router } from "express";
import especeRoutes from "../routes/espece.routes.ts";
import universRoutes from "../routes/univers.routes.ts";

const router = Router();

router.use("/especes", especeRoutes);
router.use("/univers", universRoutes);

export default router;