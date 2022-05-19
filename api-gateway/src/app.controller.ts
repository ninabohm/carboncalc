import {Controller, Get, Inject, OnModuleInit} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientKafka} from "@nestjs/microservices";

@Controller()
export class AppController implements OnModuleInit {
  constructor(
      private readonly appService: AppService,
      @Inject('CERTIFICATE_SERVICE') private readonly certificateClient: ClientKafka,
  ) {}

  @Get('/certificate')
  getCertificates() {
    console.log('GET /certificate')
    this.appService.getCertificates();
  }

  onModuleInit(): any {
    this.certificateClient.subscribeToResponseOf('get_certificates')
  }
}
