import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class AllUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    username: string;
    @Column()
    password: string;
    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }
}

