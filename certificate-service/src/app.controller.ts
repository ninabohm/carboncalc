import {Controller, Get, Inject, OnModuleInit} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientKafka, EventPattern, MessagePattern} from "@nestjs/microservices";

@Controller()
export class AppController implements OnModuleInit {
  constructor(
      private readonly appService: AppService,
      @Inject('USER_SERVICE') private readonly userClient: ClientKafka,
  ) {}

  @MessagePattern('get_certificates')
  getCertificates() {
    console.log("message received: 'get_certificates'");
    this.appService.getCertificates()
  }

  @EventPattern('certificate_bought')
  buyCertificate(data: any) {
    console.log("message received: 'certificate_bought'");
    this.appService.buyCertificate(data.value);
  }

  onModuleInit() {
    this.userClient.subscribeToResponseOf('identify_user');
  }
}
