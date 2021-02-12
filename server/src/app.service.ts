import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService,) {

  }
  getHello(): string {
    return 'Hello World Man!';
  }

  public getToken(id: number): string {
    return this.jwtService.sign({id});
  }
}
