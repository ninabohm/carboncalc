import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
}
