import {Inject, Injectable} from '@nestjs/common';
import { ClientKafka } from "@nestjs/microservices";
import {GetCertificatesRequest} from "./get-certificates-request.dto";
import {BuyCertificateRequest} from "./buy-certificate-request.dto";
import {CertificateBoughtEvent} from "./certificate-bought.event";

@Injectable()
export class AppService {
  constructor(
      @Inject('CERTIFICATE_SERVICE') private readonly certificateClient: ClientKafka
  ){}

  getCertificates() {
    console.log("send message: 'get_certificates'");
    this.certificateClient
        .send('get_certificates', new GetCertificatesRequest())
        .subscribe()
  }

  buyCertificate({ userId, price, certificateId }: BuyCertificateRequest) {
    console.log("send message: 'certificate_bought'");
    this.certificateClient
        .emit('certificate_bought', new CertificateBoughtEvent(userId, price, certificateId));
  }
}
