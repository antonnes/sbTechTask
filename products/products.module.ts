import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { VatService } from './vat/vat.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, VatService]
})
export class ProductsModule {}
