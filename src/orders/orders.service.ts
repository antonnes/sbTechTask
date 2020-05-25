import { Injectable } from '@nestjs/common';
import { Order } from './order.model';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { OrderEntity } from 'src/Data/order.interface';
import OrderStatus from 'src/Data/OrderStatus';

@Injectable()
export class OrdersService {

    constructor(private ordersDb: InMemoryDBService<OrderEntity>) {
        ordersDb.create({Date: 'Sat May 02 2020 12:45:12 GMT+0000', Products: [1, 4, 5], Status: OrderStatus.Pending});
        ordersDb.create({Date: 'Tue May 05 2020 15:01:50 GMT+0000', Products: [2, 3], Status: OrderStatus.Pending});
        ordersDb.create({Date: 'Mon May 18 2020 10:22:30 GMT+0000', Products: [1], Status: OrderStatus.Pending});
        ordersDb.create({Date: 'Sun May 10 2020 09:40:01 GMT+0000', Products: [4, 2], Status: OrderStatus.Pending});
    }

    public GetOrders(): Order[] {
        const orders = this.ordersDb.getAll();
        return orders;
    }

    public CreateOrder(orderData: any): Order {
        const order = new Order(orderData);
        this.ordersDb.create(order);
        return order;
        
    }

    public ChangeOrderStatus(id: number, newStatus): void {
        this.ordersDb.update(newStatus);
        //const orderIdx = this.getIndex(id);
        // if(orderIdx >= 0) {
        //     this.orders[orderIdx].Status = newStatus;
        //     return true;
        // } else {
        //     return false;
        // }        
    }
}
