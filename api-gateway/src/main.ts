import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3001;
  app.enableCors();
  await app.listen(PORT);
  console.log(`api-gateway listening on port ${PORT}`);
}
bootstrap();
