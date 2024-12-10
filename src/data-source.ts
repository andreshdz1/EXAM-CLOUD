import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './User/User.entity';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'postgres', // Default to 'postgres' for Docker
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'mysecretpassword',
  database: process.env.DB_NAME || 'examenCloud',
  entities: [User],
  migrations: [],
  logging: true,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
