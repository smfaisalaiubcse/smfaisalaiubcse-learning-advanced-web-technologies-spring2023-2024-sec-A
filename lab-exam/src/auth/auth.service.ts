import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt'
import { AllUsersService } from 'src/all-user/all-user.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly allUserService: AllUsersService,
    private jwtServices: JwtService
  ) { }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtServices.sign(payload),
    };
  }
}
