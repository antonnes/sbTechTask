import { Injectable } from '@nestjs/common';
import { ProductsMockupData } from 'src/Data/Products';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = ProductsMockupData;

    public GetProducts(): Product[] {
        return this.products;
    }

    public CreateProduct(productData: any): Product {
        productData.id = this.products[this.products.length - 1].Id + 1;
        const product = new Product(productData);
        this.products.push(product);
        return product;
    }

    public DeleteProduct(id: number): boolean {
        const prodIdx = this.getIndex(id);
        if(prodIdx >= 0) {
            this.products.splice(prodIdx, 1);
            return true;
        } else {
            return false;
        }
    }

    public UpdateProduct(id: number, updatedProduct): boolean {
        const prodIdx = this.getIndex(id);
        if(prodIdx >= 0) {
            this.products[prodIdx] = {...updatedProduct};
            return true;
        } else {
            return false;
        }        
    }

    private getIndex(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if(product.Id === id) {
                index = i;
            }
        }
        return index;
    }
}
