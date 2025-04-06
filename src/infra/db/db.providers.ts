import { DataSource } from 'typeorm';
import 'dotenv/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [__dirname + '/*.entity{.ts,.js}'],
        migrations: ['/migrations/*{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
