import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Microservices example')
    .setDescription('The Real Estate API description')
    .setVersion('1.0')
    .addTag('Real Estate')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
