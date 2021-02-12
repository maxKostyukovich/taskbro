import {User} from "./infrastructure/entity/User";
import {config} from "dotenv";

config();
export default {
  type: 'mongodb',
  host: process.env.DATABASE_HOST,
  //password: 'mongodb://localhost:27017',
  port: 27017,
  database: 'taskbro',
  synchronize: true,
  logging: false,
  entities: [
      User
  ],
  autoLoadEntities: true,

  // migrationsTableName: 'migrations',
  // migrations: ['dist/application/migrations/*.js'],
  // cli: {
  //     migrationsDir: 'application/migrations',
  // },
};
