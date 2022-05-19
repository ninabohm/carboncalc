import {Inject, Injectable} from '@nestjs/common';
import {CertificateBoughtEvent} from "./certificate-bought.event";
import {ClientKafka} from "@nestjs/microservices";
import {IdentifyUserRequest} from "./identify-user-request.dto";


@Injectable()
export class AppService {
  constructor(
      @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {
  }

  private readonly certificates: any[] = [
    {
      certificateId: '07ee9478-2b06-4581-9906-b1325e68885d',
      sizeHectare: 40,
      storagePotential: 0.4,
      carbonStorageTonnes: 4800
    },
    {
      certificateId: '8cf715f7-af4a-4805-9341-d4013a4a028f',
      sizeHectare: 20,
      storagePotential: 0.9,
      carbonStorageTonnes: 5400
    },
    {
      certificateId: '6c123d0c-0e3b-4637-9376-361189097762',
      sizeHectare: 200,
      storagePotential: 0.1,
      carbonStorageTonnes: 6000
    },
  ]

  getCertificates() {
    console.log("returning certificates: ");
    console.log(this.certificates);
  }

  buyCertificate(certificateBoughtEvent: CertificateBoughtEvent) {
    console.log("sending message to get user'");
    this.authClient
        .send('get_user', new IdentifyUserRequest(certificateBoughtEvent.userId))
        .subscribe((user) => {
          console.log(`charging user ${user} a price of ${certificateBoughtEvent.price} for certificate ${certificateBoughtEvent.certificateId}`);
        })
  }
}
