import { Injectable } from '@nestjs/common';
import { ProductsMockupData } from 'src/Data/Products';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = ProductsMockupData;

    public GetProducts(): Product[] {
        return this.products;
    }

    public CreateProduct(productData: any) {
        const product = new Product(productData);
        this.products.push(product);
    }

    public DeleteProduct(id: any) {
        const prodIdx = this.getIndex(id);
        this.products.splice(prodIdx, 1);
    }

    public UpdateProduct(id: number, updatedProduct) {
        const prodIdx = this.getIndex(id);
        this.products[prodIdx] = updatedProduct;
    }

    private getIndex(id): number {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if(product.Id === id) {
                return i;
            }
        }
    }
}
