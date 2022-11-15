import { OrderRepository } from '../../repository/OrderRepository';
import { DeleteOrderController } from './DeleteOrderController';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

export default () => {
  const orderRepository = new OrderRepository();

  const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository);

  const deleteOrderController = new DeleteOrderController(deleteOrderUseCase);

  return deleteOrderController;
};
