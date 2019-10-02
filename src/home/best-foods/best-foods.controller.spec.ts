import { Test, TestingModule } from '@nestjs/testing';
import { BestFoodsController } from './best-foods.controller';

describe('BestFoods Controller', () => {
  let controller: BestFoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestFoodsController],
    }).compile();

    controller = module.get<BestFoodsController>(BestFoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
