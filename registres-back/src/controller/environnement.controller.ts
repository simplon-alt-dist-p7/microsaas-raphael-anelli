import type { Request, Response, NextFunction } from "express";
import { environnementService } from "../services/environnement.service.ts";

class EnvironnementController {
    async getAllEnvironnement(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const environnement = await environnementService.getAllEnvironnement();
            res.status(200).json(environnement);
        }catch (error){
            next(error);
        }
    }
}

export const environnementController = new EnvironnementController();