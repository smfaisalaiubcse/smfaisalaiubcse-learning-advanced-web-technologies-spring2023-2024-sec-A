import { AllUser } from './src/all-user/entities/all-user.entity';
import { Room, Flight, Vehicle } from './src/agency/entities/agency.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  entities: [AllUser, Room, Flight, Vehicle],
  synchronize: true,
};

export default config;
