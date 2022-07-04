import {Inject, Injectable} from '@nestjs/common';
import {CertificateBoughtEvent} from "./certificate-bought.event";
import {ClientKafka} from "@nestjs/microservices";
import {RetrieveUserRequest} from "./retrieve-user-request.dto";
import certificates from '../db/certificates-db';


@Injectable()
export class AppService {
  constructor(
      @Inject('USER_SERVICE') private readonly userClient: ClientKafka,
  ) {}

  getCertificates() {
    console.log("returning certificates: ");
    console.log(certificates);
  }

  buyCertificate(certificateBoughtEvent: CertificateBoughtEvent) {
    console.log("sending message to get user'");
    this.userClient
        .send('identify_user', new RetrieveUserRequest(certificateBoughtEvent.userId))
        .subscribe((user) => {
          console.log(`
            charging user ${user.userId} 
            a price of ${certificateBoughtEvent.price} 
            for certificate ${certificateBoughtEvent.certificateId}
            `);
          this.assignCertificate(certificates, certificateBoughtEvent.certificateId, user.userId);
        })

  }

  assignCertificate(certificates: any[], certificateId: string, userId: string) {
    let certIndex = this.identifyCertificate(certificates, certificateId);
    certificates[certIndex].userId = userId;
    return certificates[certIndex];
  }

  identifyCertificate(certificates: any[], certificateId: string) {
    return certificates.findIndex(certificate => certificate.certificateId === certificateId);
  }

  findAll() {
    return certificates;
  }
}
