import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllUser } from '../all-user/entities/all-user.entity';
import { AllUsersService } from 'src/all-user/all-user.service';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AllUser)
    private allUserRepository: Repository<AllUser>,
    private readonly allUserService: AllUsersService,
    private jwtServices: JwtService
  ) { }
  
  async validateUser(username: string, password: string): Promise<AllUser> {
    return await this.allUserRepository.findOne({ where: { username, password } });
  }

  async login(user: any) {
    const userInDb = await this.validateUser(user.username, user.password);
    if (!userInDb) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtServices.sign(payload),
    };
  }
}


