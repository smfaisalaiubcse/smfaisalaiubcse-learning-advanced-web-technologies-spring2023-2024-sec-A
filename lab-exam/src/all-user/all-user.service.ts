import { Injectable } from '@nestjs/common';
import { CreateAllUserDto } from './dto/create-all-user.dto';
import { UpdateAllUserDto } from './dto/update-all-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllUser } from './entities/all-user.entity';
@Injectable()
export class AllUsersService {
  constructor(
    @InjectRepository(AllUser)
    private allUserRepository: Repository<AllUser>,
  ) { }

  async findByUsername(username: string): Promise<AllUser | undefined> {
    return this.allUserRepository.findOne({ where: { username } });
  }
  async create(createAllUserDto: CreateAllUserDto): Promise<AllUser> {
    const newUser = this.allUserRepository.create(createAllUserDto);
    return this.allUserRepository.save(newUser);
  }
  async findAll() {
    return this.allUserRepository.find();
  }
}

