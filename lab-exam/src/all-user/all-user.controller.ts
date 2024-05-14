import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AllUsersService } from './all-user.service';
import { CreateAllUserDto } from './dto/create-all-user.dto';
import { UpdateAllUserDto } from './dto/update-all-user.dto';
@Controller('all-users')
export class AllUsersController {
  constructor(private readonly allUsersService: AllUsersService) { }
  @Post()
  create(@Body() createAllUserDto: CreateAllUserDto) {
    return this.allUsersService.create(createAllUserDto);
  }
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() createAllUserDto: CreateAllUserDto) {
    return await this.allUsersService.create(createAllUserDto);
  }
  @Get('all-user')
  findAll() {
    return this.allUsersService.findAll();
  }
}

