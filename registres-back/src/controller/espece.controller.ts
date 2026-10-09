import type { Request, Response, NextFunction } from "express";
import { especeService } from "../services/espece.service.ts";

class EspeceController {
    async getAllEspeces(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const especes = await especeService.getAllEspeces();
            res.status(200).json(especes);
        }catch (error){
            next(error);
        }
    }
}

export const especeController = new EspeceController();