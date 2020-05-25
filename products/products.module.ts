import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { VatService } from './vat/vat.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('product', {})],
  controllers: [ProductsController],
  providers: [ProductsService, VatService]
})
export class ProductsModule {}
