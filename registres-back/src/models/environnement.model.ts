import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "environnement", schema:"registres"})
export class Environnement {
    @PrimaryGeneratedColumn()
    id_environnement!: number;

    @Column({ type: "varchar", length: 30})
    type_environnement!: string;
}