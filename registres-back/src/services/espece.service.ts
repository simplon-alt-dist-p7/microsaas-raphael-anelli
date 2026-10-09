import { especeRepository } from "../repository/espece.repository.ts";
import { Espece } from "../models/espece.model.ts";

class EspeceService {
    async getAllEspece(): Promise<Espece[]>{
        const especes = await especeRepository.findAllEspece();

        return especes;
    }

}

export const especeService = new EspeceService();