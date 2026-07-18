import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
 root() {
    return {
      name: 'DevOps AI Lab API',
      version: 'v1',
      health: '/api/v1/health',
      docs: '/api/v1/docs',
    };
  }
}