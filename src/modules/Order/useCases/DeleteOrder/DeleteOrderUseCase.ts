import { IOrderRepository } from '../../repository/IOrderRepository';

export class DeleteOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(orderId: string): Promise<void> {
    await this.orderRepository.delete(orderId);
  }
}
