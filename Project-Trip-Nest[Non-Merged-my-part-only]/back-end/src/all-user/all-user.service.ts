import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
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

  async findById(id: number): Promise<AllUser | undefined> {
    return this.allUserRepository.findOne({ where: { id } });
  }

  async create(createAllUserDto: CreateAllUserDto): Promise<AllUser> {
    // Check if username or email already exists
    const isUnique = await this.isUnique(createAllUserDto.username, createAllUserDto.email);
    if (!isUnique) {
      throw new ConflictException('Username or email already exists');
    }

    const newUser = this.allUserRepository.create(createAllUserDto);
    return this.allUserRepository.save(newUser);
  }

  async isUnique(username: string, email: string): Promise<boolean> {
    const existingUser = await this.allUserRepository.findOne({
      where: [{ username }, { email }],
    });
    return !existingUser;
  }
  async findAll() {
    return this.allUserRepository.find();
  }

  async update(id: number, updateAllUserDto: UpdateAllUserDto): Promise<AllUser | undefined> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateAllUserDto);
    return this.allUserRepository.save(user);
  }
}

