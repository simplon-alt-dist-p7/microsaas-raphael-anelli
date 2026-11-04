import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "univers", schema:"registres"})
export class Univers{
    @PrimaryGeneratedColumn()
    id_univers!: number;

    @Column({ type: "varchar", length: 50})
    nom_univers!: string;
}