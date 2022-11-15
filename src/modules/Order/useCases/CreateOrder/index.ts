import { OrderRepository } from '../../repository/OrderRepository';
import { CreateOrderController } from './CreateOrderController';
import { CreateOrderUseCase } from './CreateOrderUseCase';

export default () => {
  const orderRepository = new OrderRepository();

  const createOrderUseCase = new CreateOrderUseCase(orderRepository);

  const createOrderController = new CreateOrderController(createOrderUseCase);

  return createOrderController;
};
