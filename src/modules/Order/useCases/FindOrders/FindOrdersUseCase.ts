import { IOrder } from '../../interfaces/IOrder';
import { IOrderRepository } from '../../repository/IOrderRepository';

export class FindOrdersUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(): Promise<IOrder[]> {
    return await this.orderRepository.findAll();
  }
}
