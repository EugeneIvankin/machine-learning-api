import { Module } from '@nestjs/common';

import { BestFoodsController } from '@home/best-foods';
import { BestFoodsService } from '@home/best-foods';

@Module({
  controllers: [BestFoodsController],
  providers: [BestFoodsService],
})
export class HomeModule {}
