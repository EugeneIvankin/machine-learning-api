import { Test, TestingModule } from '@nestjs/testing';
import { BestFoodsService } from './best-foods.service';

describe('BestFoodsService', () => {
  let service: BestFoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BestFoodsService],
    }).compile();

    service = module.get<BestFoodsService>(BestFoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
