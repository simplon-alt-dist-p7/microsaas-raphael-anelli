import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "espece", schema:"registres"})
export class Espece {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 30})
    type_espece!: string;
}