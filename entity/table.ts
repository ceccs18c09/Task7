import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class table {
    @PrimaryGeneratedColumn()
    Id!: number;
    

    @Column()
    Name!: string;


    @Column()
    Age!: number;

    
}