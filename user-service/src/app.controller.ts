import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('identify_user')
  retrieveUser(data: any) {
    return this.appService.retrieveUser(data.value);
  }
}
