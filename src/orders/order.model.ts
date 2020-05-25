import { IsNotEmpty } from 'class-validator';
import Status from "src/Data/OrderStatus";

export class Order {
    public Date: string;
    public Products: number[];
    public Status: Status;

    constructor(order) {
        this.Date = `${new Date()}`;
        this.Products = order.products;
        this.Status = order.status;
    }
}
