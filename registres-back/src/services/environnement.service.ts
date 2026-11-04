import { environnementRepository } from "../repository/environnement.repository.ts";
import { Environnement } from "../models/environnement.model.ts";

class EnvironnementService {
    async getAllEnvironnement(): Promise<Environnement[]>{
        const environnement = await environnementRepository.findAllEnvironnement();

        return environnement
    }
}

export const environnementService = new EnvironnementService();