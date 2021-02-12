import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './dbConfig';
import { ConnectionOptions } from 'typeorm';
import {GoogleAuthController} from "./app/google/googleAuth.controller";
import {GoogleStrategy} from "./app/auth/GoogleStrategy";
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbConfig } as ConnectionOptions),
  ],
  controllers: [GoogleAuthController],
  providers: [
      GoogleStrategy,
      {
        provide: "AppService",
        useValue: new AppService(
            new JwtService({
              secret: process.env.JWT_SECRETE_KEY,
              signOptions: {
                expiresIn: process.env.TOKEN_EXPIRED_TIME || "1d"
              }
            })
        )
      }

  ],
})
export class AppModule {}
