import { Product } from "src/products/product.model";
import Status from "src/Data/Status";

export class Order {
    public Date: Date;
    public Products: Product[];
    public Status: Status;
    public Id: number;

    constructor(order) {
        this.Status = order.status;
        this.Products = order.products;
        this.Date = new Date();
    }
}
