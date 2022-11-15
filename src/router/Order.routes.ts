import { Request, Response, Router } from 'express';
import createOrderController from '../modules/Order/useCases/CreateOrder';
import findOrdersController from '../modules/Order/useCases/FindOrders';
import changeOrderStatusController from '../modules/Order/useCases/ChangeOrderStatus';
import deleteOrderController from '../modules/Order/useCases/DeleteOrder';

export const OrderRouter = Router();

OrderRouter.get('/', (req: Request, res: Response) => {
  return findOrdersController().handle(req, res);
});

OrderRouter.post('/', (req: Request, res: Response) => {
  return createOrderController().handle(req, res);
});

OrderRouter.patch('/:orderId', (req: Request, res: Response) => {
  return changeOrderStatusController().handle(req, res);
});

OrderRouter.delete('/:orderId', (req: Request, res: Response) => {
  return deleteOrderController().handle(req, res);
});
