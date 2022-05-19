import {Inject, Injectable} from '@nestjs/common';
import { ClientKafka } from "@nestjs/microservices";
import {GetCertificatesRequest} from "./get-certificates-request.dto";

@Injectable()
export class AppService {
  constructor(
      @Inject('CERTIFICATE_SERVICE') private readonly certificateClient: ClientKafka
  ){}

  getCertificates() {
    console.log('api-gateway service getting certificates')
    this.certificateClient
        .send('get_certificates', new GetCertificatesRequest())
        .subscribe()
  }
}
