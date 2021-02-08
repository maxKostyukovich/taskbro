import {User} from "./infrastructure/entity/User";

export default {
  type: 'mongodb',
  host: '172.18.0.1',
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
