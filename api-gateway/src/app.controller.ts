import {Body, Controller, Get, Inject, OnModuleInit, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientKafka} from "@nestjs/microservices";
import {BuyCertificateRequest} from "./buy-certificate-request.dto";

@Controller()
export class AppController implements OnModuleInit {
  constructor(
      private readonly appService: AppService,
      @Inject('CERTIFICATE_SERVICE') private readonly certificateClient: ClientKafka,
  ) {}

  @Get('/certificate')
  getCertificates() {
    console.log('GET /certificate');
    this.appService.getCertificates();
  }

  @Post('/certificate')
  buyCertificate(@Body() buyCertificateRequest: BuyCertificateRequest) {
    console.log('POST /certificate');
    this.appService.buyCertificate(buyCertificateRequest);
  }

  onModuleInit(): any {
    this.certificateClient.subscribeToResponseOf('get_certificates');
  }
}
