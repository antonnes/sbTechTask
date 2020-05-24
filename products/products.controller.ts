import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus, UseGuards, ParseIntPipe } from '@nestjs/common';
import { Response } from 'express';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {
        
    }

    @Get()
    getAll(@Res() res: Response): any {
        const products = this.productService.GetProducts();
        res.status(HttpStatus.OK).json(products);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() newProduct: any, @Res() res: Response): any {
        this.productService.CreateProduct(newProduct);
        const products = this.productService.GetProducts();
        res.status(HttpStatus.CREATED).json({msg: 'Product created', products: products});
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id', new ParseIntPipe()) id: number, @Body() updatedProduct: Product, @Res() res: Response) {
        const productUpdated = this.productService.UpdateProduct(id, updatedProduct);
        if(productUpdated) {
            const products = this.productService.GetProducts();
            res.status(HttpStatus.OK).json({msg: 'Product updated', products: products});
        } else {
            res.status(HttpStatus.NOT_FOUND).json({msg: 'This product does not exist'});
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', new ParseIntPipe()) id: number, @Res() res: Response) {
        const productDeleted = this.productService.DeleteProduct(id);
        if(productDeleted) {
            const products = this.productService.GetProducts();
            res.status(HttpStatus.NO_CONTENT).json({msg: 'Product deleted', products: products});
        } else {
            res.status(HttpStatus.NOT_FOUND).json({msg: 'This product does not exist'});
        }        
    }
}
