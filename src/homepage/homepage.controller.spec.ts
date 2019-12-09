import { Test, TestingModule } from '@nestjs/testing';
import { HomepageController } from './homepage.controller';

describe('Homepage Controller', () => {
  let controller: HomepageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageController],
    }).compile();

    controller = module.get<HomepageController>(HomepageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
