export class Product {
    public Name: string;
    public Category: string;
    public Price: number;

    constructor(product) {
        this.Name = product.name;
        this.Category = product.category;
        this.Price = product.price; 
    }
}
