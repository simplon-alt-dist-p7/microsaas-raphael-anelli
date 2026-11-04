import { universRepository } from "../repository/univers.repository.ts";
import { Univers } from "../models/univers.model.ts";

class UniversService {
    async getAllUnivers(): Promise<Univers[]>{
        const univers = await universRepository.findAllUnivers();

        return univers;
    }
}

export const universService = new UniversService();