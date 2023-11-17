import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('application')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health-check')
  getHealtStatus(): string {
    return this.appService.getHealthStatus();
  }
}
