import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('DevOps AI Lab API')
    .setDescription(
      'Production-ready DevOps Engineering Platform API',
    )
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter JWT Access Token',
        in: 'header',
      },
      'JWT',
    )
    .build();

  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );

  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(process.env.PORT || 3000);

  console.clear();

  console.log('🚀 DevOps AI Lab API');
  console.log(`🌐 Port      : ${process.env.PORT || 3000}`);
  console.log(
    `❤️  Health    : http://localhost:${process.env.PORT || 3000}/api/v1/health`,
  );
  console.log(
    `📘 Swagger   : http://localhost:${process.env.PORT || 3000}/api/v1/docs`,
  );
}

bootstrap();