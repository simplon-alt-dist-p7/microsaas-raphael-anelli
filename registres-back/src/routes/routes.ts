import { Router } from "express";
import especeRoutes from "../routes/espece.routes.ts";

const router = Router();

router.use("/especes", especeRoutes);

export default router;