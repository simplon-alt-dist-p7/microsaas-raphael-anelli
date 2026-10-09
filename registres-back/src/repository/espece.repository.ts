import { AppDataSource } from "../config/database.ts";
import { Espece } from "../models/espece.model.ts";
import { Repository } from "typeorm";

class EspeceRepository {
    private repository: Repository<Espece>;

    constructor(){
        this.repository = AppDataSource.getRepository(Espece);
    }

    async findAllEspece(): Promise<Espece[]> {
        return await this.repository.find();
    }
}

export const especeRepository = new EspeceRepository();