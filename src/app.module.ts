import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AllUsersModule } from './all-user/all-user.module';
import config from '../ormconfig'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, AllUsersModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
