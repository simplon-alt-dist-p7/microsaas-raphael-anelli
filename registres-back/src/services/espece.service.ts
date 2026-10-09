import { especeRepository } from "../repository/espece.repository.ts";
import { Espece } from "../models/espece.model.ts";

class EspeceService {
    async getAllEspeces(): Promise<Espece[]>{
        const especes = await especeRepository.findAllEspeces();

        return especes;
    }

}

export const especeService = new EspeceService();