import { Module } from '@nestjs/common';
import { AllUsersService } from './all-user.service';
import { AllUsersController } from './all-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllUser } from './entities/all-user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AllUser])],
  controllers: [AllUsersController],
  providers: [AllUsersService],
  exports: [AllUsersService]
})
export class AllUsersModule { }

