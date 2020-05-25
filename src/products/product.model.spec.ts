import { Product } from './product.model';

describe('Product', () => {
  it('should be defined', (product) => {
    expect(new Product(product)).toBeDefined();
  });
});
