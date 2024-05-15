import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AllUsersModule } from './all-user/all-user.module';
import config from '../ormconfig'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyModule } from './agency/agency.module';
import { BookingModule } from './booking/booking.module';
import { FaqModule } from './faq/faq.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [AuthModule, AllUsersModule, TypeOrmModule.forRoot(config), AgencyModule, BookingModule, FaqModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
