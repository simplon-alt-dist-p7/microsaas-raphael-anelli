import { AppDataSource } from "../config/database.ts";
import { Repository } from "typeorm";
import { Univers } from "../models/univers.model.ts";

class UniversRepository{
    private repository: Repository<Univers>;

    constructor(){
        this.repository = AppDataSource.getRepository(Univers);
    }

    async findAllUnivers(): Promise<Univers[]> {
        return await this.repository.find();
    }
}

export const universRepository = new UniversRepository();