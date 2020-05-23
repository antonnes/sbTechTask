import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Order } from './order.model';

@Controller('orders')
export class OrdersController {
    @Get()
    getAll(): string {
        return 'This action returns all cats';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedOrder: Order) {
        return `This action updates a #${id} cat`;
    }
}
