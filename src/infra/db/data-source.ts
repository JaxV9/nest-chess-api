import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/*.entity{.ts,.js}'], //le fichier entity est au meme niveau
  migrations: ['src/infra/db/migrations/*{.ts,.js}'],
  synchronize: false,
});
