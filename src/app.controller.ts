import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  @ApiTags('Health check')
  @ApiOperation({ summary: `Get 'Hello World' message to health check 😎` })
  @ApiResponse({
    status: 200,
    description: `'Hello World' message ✅`,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
