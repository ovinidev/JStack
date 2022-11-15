import { ICreateOrderDTO } from '../../interfaces/ICreateOrderDTO';
import { IOrderRepository } from '../../repository/IOrderRepository';

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute({ table, products }: ICreateOrderDTO): Promise<void> {
    await this.orderRepository.create({ table, products });
  }
}
