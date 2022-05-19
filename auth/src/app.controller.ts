import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @MessagePattern('identify_user')
  // getUser(data: any) {
  //   console.log("message received: 'identify_user'");
  //   return this.appService.getUser(data.value);
  // }

  @MessagePattern('get_user')
  getUser(data: any) {
    console.log("message received: 'get_user'");
    return this.appService.getUser(data.value);
  }


}
