import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      message: 'DevOps AI Lab API',
      docs: '/health',
    };
  }
}