import { AppError } from '../../../../errors/AppError';
import { IOrderRepository } from '../../repository/IOrderRepository';

export class ChangeOrderStatusUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(orderId: string, status: string): Promise<void> {
    if (!['WAITING', 'IN_PRODUCTION', 'READY'].includes(status)) {
      throw new AppError('Status to be: WAITING, IN_PRODUCTION, READY');
    }

    this.orderRepository.changeStatus(orderId, status);
  }
}
