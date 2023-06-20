import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.useGlobalPipes(new ValidationPipe());
  // console.log(process.env.NODE_ENV)
  app.enableCors();

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
