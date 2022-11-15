import { OrderRepository } from '../../repository/OrderRepository';
import { ChangeOrderStatusController } from './ChangeOrderStatusController';
import { ChangeOrderStatusUseCase } from './ChangeOrderStatusUseCase';

export default () => {
  const orderRepository = new OrderRepository();

  const changeOrderStatusUseCase = new ChangeOrderStatusUseCase(
    orderRepository,
  );

  const changeOrderStatusController = new ChangeOrderStatusController(
    changeOrderStatusUseCase,
  );

  return changeOrderStatusController;
};
