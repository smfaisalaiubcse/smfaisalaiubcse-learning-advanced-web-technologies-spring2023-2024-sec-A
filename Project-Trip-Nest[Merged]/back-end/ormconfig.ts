import { AllUser } from './src/all-user/entities/all-user.entity';
import { Room, Flight, Vehicle } from './src/agency/entities/agency.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Booking } from 'src/booking/entities/booking.entity';
import { faq } from 'src/faq/entities/faq.entity';
import { review } from 'src/review/entities/review.entity';
import { Rooms } from 'src/admin/entities/admin.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  entities: [AllUser, Room, Rooms, Flight, Vehicle, Booking,faq,review],
  synchronize: true,
};

export default config;
