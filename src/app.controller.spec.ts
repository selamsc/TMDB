import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('getHealtStatus', () => {
    it('should return health status from AppService', () => {
      const healthStatus = 'Application server is running...';
      jest.spyOn(appService, 'getHealthStatus').mockReturnValue(healthStatus);

      const result = appController.getHealtStatus();

      expect(result).toBe(healthStatus);
    });
  });
});
