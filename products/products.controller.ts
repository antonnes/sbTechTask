import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
    @Get()
    getAll(): string {
        return 'This action returns all cats';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedProduct: Product) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
