import { OrderRepository } from '../../repository/OrderRepository';
import { FindOrdersController } from './FindOrdersController';
import { FindOrdersUseCase } from './FindOrdersUseCase';

export default () => {
  const orderRepository = new OrderRepository();

  const findOrdersUseCase = new FindOrdersUseCase(orderRepository);

  const findOrdersController = new FindOrdersController(findOrdersUseCase);

  return findOrdersController;
};
