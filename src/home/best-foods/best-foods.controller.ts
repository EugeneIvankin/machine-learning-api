import { Controller, Get } from '@nestjs/common';

import { BestFoodsService } from '@home/best-foods/best-foods.service';

@Controller('best-foods')
export class BestFoodsController {
  constructor(private readonly service: BestFoodsService) {}

  @Get()
  getFoods(): any {
    return this.service.get();
  }
}
