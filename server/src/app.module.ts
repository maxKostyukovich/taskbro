import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './dbConfig';
import { ConnectionOptions } from 'typeorm';
import {GoogleAuthController} from "./app/google/googleAuth.controller";
import {GoogleStrategy} from "./app/auth/GoogleStrategy";

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbConfig } as ConnectionOptions),
  ],
  controllers: [GoogleAuthController],
  providers: [GoogleStrategy],
})
export class AppModule {}
