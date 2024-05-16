import { AllUser } from './src/all-user/entities/all-user.entity';
import { Room, Flight, Vehicle } from './src/agency/entities/agency.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Booking } from 'src/booking/entities/booking.entity';
import { faq } from 'src/faq/entities/faq.entity';
import { review } from 'src/review/entities/review.entity';
import { Rooms } from 'src/admin/entities/admin.entity';
// import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';
import { DepositMoney } from 'src/deposit-money/entities/deposit-money.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'tripnestmerge',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '627232',
  entities: [
    AllUser,
    Room,
    Rooms,
    Flight,
    Vehicle,
    Booking,
    faq,
    review,
    DepositMoney,
  ],
  synchronize: true,
};

export default config;
