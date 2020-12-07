import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constants'
export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => await createConnection({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'taskbro',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];