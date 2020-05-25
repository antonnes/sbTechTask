import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus, UseGuards, ValidationPipe, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { Order } from './order.model';
import { OrdersService } from './orders.service';
import { OrderDto } from './order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService) {
        
    }
    
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(@Res() res: Response): any {
        const orders = this.ordersService.GetOrders();
        res.status(HttpStatus.OK).json(orders);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() newOrder: OrderDto, @Res() res: Response): any {
        this.ordersService.CreateOrder(newOrder);
        res.status(HttpStatus.CREATED).json({msg: 'Order created'});
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() updatedStatus: Order, @Res() res: Response) {
        this.ordersService.ChangeOrderStatus(id, updatedStatus);
        res.status(HttpStatus.CREATED).json({msg: 'Order updated'});
    }
}
