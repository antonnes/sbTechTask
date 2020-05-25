import { Order } from './order.model';

describe('OrderModel', () => {
  it('should be defined', (order) => {
    expect(new Order(order)).toBeDefined();
  });
});
