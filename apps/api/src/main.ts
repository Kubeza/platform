import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get<number>('port') ?? 3000;

  app.setGlobalPrefix('api/v1');

  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );

  app.enableCors({
    origin: true,
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
    .setDescription('Backend API for the DevOps AI Lab platform.')
    .setVersion(configService.get<string>('appVersion') ?? '1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api/v1/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(port);

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🚀 DevOps AI Lab API');
  console.log(`🌍 Environment : ${configService.get('nodeEnv')}`);
  console.log(`📦 Version     : ${configService.get('appVersion')}`);
  console.log(`🔌 Port        : ${port}`);
  console.log(`❤️ Health      : http://localhost:${port}/api/v1/health`);
  console.log(`📚 Swagger     : http://localhost:${port}/api/v1/docs`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

bootstrap();