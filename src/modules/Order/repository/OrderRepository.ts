import { IOrderRepository } from './IOrderRepository';
import { ICreateOrderDTO } from '../interfaces/ICreateOrderDTO';
import { Order } from '../models/Order';
import { IOrder } from '../interfaces/IOrder';

export class OrderRepository implements IOrderRepository {
  async create({ table, products }: ICreateOrderDTO) {
    await Order.create({ table, products });
  }

  async findAll(): Promise<IOrder[]> {
    return await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');
  }

  async changeStatus(orderId: string, status: string): Promise<void> {
    await Order.updateOne({ orderId, status });
  }

  async delete(orderId: string): Promise<void> {
    await Order.deleteOne({ orderId });
  }
}
