import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {
        
    }

    @Get()
    getAll(@Res() res: Response): any {
        const products = this.productService.GetProducts();
        res.status(HttpStatus.OK).json(products);
    }

    @Post()
    create(@Body() newProduct: any, @Res() res: Response): any {
        this.productService.CreateProduct(newProduct);
        res.status(HttpStatus.CREATED).json({msg: 'created'});
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
