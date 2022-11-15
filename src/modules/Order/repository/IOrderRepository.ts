import { ICreateOrderDTO } from '../interfaces/ICreateOrderDTO';
import { IOrder } from '../interfaces/IOrder';

export interface IOrderRepository {
  create({ table, products }: ICreateOrderDTO): Promise<void>;
  findAll(): Promise<IOrder[]>;
  changeStatus(orderId: string, status: string): Promise<void>;
  delete(orderId: string): Promise<void>;
}
