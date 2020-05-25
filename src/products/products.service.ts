import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { VatService } from './vat/vat.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ProductEntity } from 'src/Data/product.interface';

@Injectable()
export class ProductsService {
 

    constructor(private vatService: VatService, private dbService: InMemoryDBService<ProductEntity>) {
        dbService.create({Name: 'T-shirt', Price: 12, Category: 'Clothes'});
        dbService.create({Name: 'Phone', Price: 438, Category: 'Electronics'});
        dbService.create({Name: 'Speakers', Price: 50, Category: 'Electronics'});
        dbService.create({Name: 'Harry Potter', Price: 10, Category: 'Books'});
        dbService.create({Name: 'Banana', Price: 1, Category: 'Food'});
    }

    public async GetProducts(countryCode: string): Promise<Product[]> {
        const vat = await this.vatService.GetVat(countryCode);
        const products = this.dbService.getAll();
        const producsWithVat = products.map(product => {
            product.Price += product.Price * (vat/100);
            return product;
        })
        return producsWithVat;
    }

    public CreateProduct(productData: any): Product {
        const product = new Product(productData);
        this.dbService.create(product);
        return product;
    }

    public DeleteProduct(id: number): void {
        this.dbService.delete(id);

    }

    public UpdateProduct(id: number, updatedProduct): void {
        this.dbService.update(updatedProduct);
         
    }
}
