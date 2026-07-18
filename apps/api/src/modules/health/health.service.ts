import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HealthService {
  constructor(private readonly configService: ConfigService) {}

  getHealth() {
    return {
      status: 'ok',
      service: this.configService.get<string>('appName'),
      version: this.configService.get<string>('appVersion'),
      environment: this.configService.get<string>('nodeEnv'),
      timestamp: new Date().toISOString(),
    };
  }
}