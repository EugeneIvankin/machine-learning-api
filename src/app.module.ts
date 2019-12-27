import { Module } from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { PurchasesModule } from './payments/purchases.module';

@Module({
  imports: [
    ProductsModule,
    UserModule,
    PurchasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
