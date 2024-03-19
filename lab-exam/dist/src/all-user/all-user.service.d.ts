import { CreateAllUserDto } from './dto/create-all-user.dto';
import { Repository } from 'typeorm';
import { AllUser } from './entities/all-user.entity';
export declare class AllUsersService {
    private allUserRepository;
    constructor(allUserRepository: Repository<AllUser>);
    findByUsername(username: string): Promise<AllUser | undefined>;
    create(createAllUserDto: CreateAllUserDto): Promise<AllUser>;
    findAll(): Promise<AllUser[]>;
}
