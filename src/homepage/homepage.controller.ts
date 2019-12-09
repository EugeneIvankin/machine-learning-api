import { Controller, Get } from '@nestjs/common';

import { HomepageService } from './homepage.service';
import { Product } from '../contracts';

@Controller('recommendedProduct')
export class HomepageController {
  constructor(private readonly service: HomepageService) {}

  @Get()
  getRecommendedProduct(): Product[] {
    return this.service.getRecommendedProduct();
  }
}

@Controller('popProduct')
export class PopProductController {
  constructor(private readonly service: HomepageService) {}

  @Get()
  getPopProducts(): Product[] {
    return this.service.getPopProducts();
  }
}
