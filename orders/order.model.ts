import { Product } from "src/products/product.model";
import Status from "src/Data/Status";

export class Order {
    public Id: number;
    public Date: Date;
    public Products: Product[];
    public Status: Status;

    constructor(order) {
        this.Id = order.id;
        this.Date = new Date();
        this.Products = order.products;
        this.Status = order.status;
    }
}
