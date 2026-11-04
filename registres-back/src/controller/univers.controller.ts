import type { Request, Response, NextFunction } from "express";
import { universService } from "../services/univers.service.ts";

class UniversController {
    async getAllUnivers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const univers = await universService.getAllUnivers();
            res.status(200).json(univers);
        }catch(error){
            next(error);
        }
    }
}

export const universController = new UniversController();