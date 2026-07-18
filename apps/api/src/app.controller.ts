import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Root')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({
    summary: 'API information',
  })
  root() {
    return {
      name: 'DevOps AI Lab API',
      version: 'v1',
      health: '/api/v1/health',
      docs: '/api/v1/docs',
    };
  }
}