export class Product {
    public Id: number;
    public Name: string;
    public Category: string;
    public Price: number;


    constructor(product) {
        this.Id = product.id;   
        this.Name = product.name;
        this.Category = product.category;
        this.Price = product.price; 
    }
}
