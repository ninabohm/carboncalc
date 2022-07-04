import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule, {
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'] //same port as in billing app.module
          },
          consumer: {
            groupId: 'user-service-consumer' //same groupId as in billing app.module
          }
        }
      }
  );
  app.listen();
  console.log('user-service listening')
}
bootstrap();
