import { Injectable } from '@nestjs/common';
import { OrdersMockupData } from 'src/Data/OrdersMockupData';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
    // private orders: Order[] = OrdersMockupData;
    private orders: Order[] = [];

    public GetOrders(): Order[] {
        return this.orders;
    }

    public CreateOrder(orderData: any): Order {
        orderData.id = this.orders.length > 0 ? this.orders[this.orders.length - 1].Id + 1 : 1;
        const order = new Order(orderData);
        this.orders.push(order);
        return order;
    }

    public ChangeOrderStatus(id: number, newStatus): boolean {
        const orderIdx = this.getIndex(id);
        if(orderIdx >= 0) {
            this.orders[orderIdx].Status = newStatus;
            return true;
        } else {
            return false;
        }        
    }

    private getIndex(id: number): number {
        let index = -1;
        for (let i = 0; i < this.orders.length; i++) {
            const product = this.orders[i];
            if(product.Id === id) {
                index = i;
            }
        }
        return index;
    }
}
