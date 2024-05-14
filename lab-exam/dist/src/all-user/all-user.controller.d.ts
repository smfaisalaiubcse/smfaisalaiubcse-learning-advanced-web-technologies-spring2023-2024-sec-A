import { AllUsersService } from './all-user.service';
import { CreateAllUserDto } from './dto/create-all-user.dto';
export declare class AllUsersController {
    private readonly allUsersService;
    constructor(allUsersService: AllUsersService);
    create(createAllUserDto: CreateAllUserDto): Promise<import("src/all-user/entities/all-user.entity").AllUser>;
    signUp(createAllUserDto: CreateAllUserDto): Promise<import("src/all-user/entities/all-user.entity").AllUser>;
    findAll(): Promise<import("src/all-user/entities/all-user.entity").AllUser[]>;
}
