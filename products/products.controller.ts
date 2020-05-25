import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus, UseGuards, ParseIntPipe, Req } from '@nestjs/common';
import { Response } from 'express';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {
        
    }

    @Get()
    async getAll(@Res() res: Response): Promise<any> {
        const products = await this.productService.GetProducts('bg');
        res.status(HttpStatus.OK).json(products);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() newProduct: any, @Req() request, @Res() res: Response): Promise<any> {
        const countryCode = request.user.countryCode;
        this.productService.CreateProduct(newProduct);
        const products = await this.productService.GetProducts(countryCode);
        res.status(HttpStatus.CREATED).json({msg: 'Product created', products: products});
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id', new ParseIntPipe()) id: number, @Body() updatedProduct: Product, @Req() request, @Res() res: Response) {
        //const productUpdated = this.productService.UpdateProduct(id, updatedProduct);
        this.productService.UpdateProduct(id, updatedProduct);
        res.status(HttpStatus.OK).json({msg: 'Product updated'});
        // if(productUpdated) {
        //     const products = this.productService.GetProducts(countryCode);
        //     res.status(HttpStatus.OK).json({msg: 'Product updated', products: products});
        // } else {
        //     res.status(HttpStatus.NOT_FOUND).json({msg: 'This product does not exist'});
        // }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', new ParseIntPipe()) id: number, @Req() request, @Res() res: Response) {
        //const productDeleted = this.productService.DeleteProduct(id);
        this.productService.DeleteProduct(id);
        res.status(HttpStatus.NO_CONTENT).json({msg: 'Product deleted'});
        // if(productDeleted) {
        //     const products = this.productService.GetProducts(countryCode);
        //     res.status(HttpStatus.NO_CONTENT).json({msg: 'Product deleted', products: products});
        // } else {
        //     res.status(HttpStatus.NOT_FOUND).json({msg: 'This product does not exist'});
        // }        
    }
}
