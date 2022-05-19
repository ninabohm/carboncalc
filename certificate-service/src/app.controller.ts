import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_certificates')
  getCertificates() {
    console.log("message received: 'get_certificates'");
    this.appService.getCertificates()
  }
}
