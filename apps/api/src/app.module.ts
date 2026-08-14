import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';

import { HealthModule } from './modules/health/health.module';

// ✅ Use the NEW Users module
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,

    UsersModule,

    HealthModule,

    AuthModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}