import { AppDataSource } from "../config/database.ts";
import { Repository } from "typeorm";
import { Environnement } from "../models/environnement.model.ts";

class EnvironnementRepository {
    private repository: Repository<Environnement>;

    constructor(){
        this.repository = AppDataSource.getRepository(Environnement);
    }

    async findAllEnvironnement(): Promise<Environnement[]> {
        return await this.repository.find();
    }
}

export const environnementRepository = new EnvironnementRepository();