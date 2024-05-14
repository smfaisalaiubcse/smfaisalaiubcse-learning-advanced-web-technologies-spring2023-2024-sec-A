import { JwtService } from '@nestjs/jwt';
import { AllUsersService } from 'src/all-user/all-user.service';
export declare class AuthService {
    private readonly allUserService;
    private jwtServices;
    constructor(allUserService: AllUsersService, jwtServices: JwtService);
    login(user: any): Promise<{
        access_token: string;
    }>;
}
