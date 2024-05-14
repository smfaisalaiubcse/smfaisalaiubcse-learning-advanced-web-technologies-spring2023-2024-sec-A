import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class AllUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    username: string;
    @Column()
    password: string;
}

