import { Module } from '@nestjs/common';

import { HomepageController, PopProductController } from './homepage.controller';
import { HomepageService } from './homepage.service';

@Module({
  controllers: [
    HomepageController,
    PopProductController,
  ],
  providers: [HomepageService],
})
export class HomepageModule {}
