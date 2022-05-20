import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {ClientKafka} from "@nestjs/microservices";

describe('CertificateController', () => {
    let certificateController: AppController;
    let certificateService: AppService;
    let userClient: ClientKafka;
    let certificates: any[] = [
        {
            certificateId: '07ee9478-2b06-4581-9906-b1325e68885d',
            sizeHectare: 40,
            storagePotential: 0.4,
            carbonStorageTonnes: 4800,
            userId: null
        },
        {
            certificateId: '8cf715f7-af4a-4805-9341-d4013a4a028f',
            sizeHectare: 20,
            storagePotential: 0.9,
            carbonStorageTonnes: 5400,
            userId: null
        },
        {
            certificateId: '6c123d0c-0e3b-4637-9376-361189097762',
            sizeHectare: 200,
            storagePotential: 0.1,
            carbonStorageTonnes: 6000,
            userId: null
        },
    ]

    beforeEach(() => {
        certificateService = new AppService(userClient);
        certificateController = new AppController(certificateService, userClient);
    });

    describe('findAll', () => {
        it('should return an array', async () => {
            const result = ['test'];
            jest.spyOn(certificateService, 'findAll').mockImplementation(() => result);

            expect(certificateController.findAll()).toBe(result);
        });

        it('should return an array of certificates', async () => {
            const expected = certificates;
            expect(certificateController.findAll()).toEqual(expected);
        });

    });

    describe('assignCertificate', () => {
        it('should assign a userId to a certificate', async () => {
            const certificateId = '07ee9478-2b06-4581-9906-b1325e68885d';
            const userId = '123'
            const expected = {
                certificateId: '07ee9478-2b06-4581-9906-b1325e68885d',
                sizeHectare: 40,
                storagePotential: 0.4,
                carbonStorageTonnes: 4800,
                userId: '123'
            };

            expect(certificateService.assignCertificate(certificates, certificateId, userId)).toEqual(expected);
        })

        it('should return the index of the correct certificate', async () => {
            const certificateId = '8cf715f7-af4a-4805-9341-d4013a4a028f';
            expect(certificateService.identifyCertificate(certificates, certificateId)).toBe(1);
        })
    })
})