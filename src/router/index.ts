import { Router } from 'express';
import { CategoryRouter } from './Category.routes';
import { OrderRouter } from './Order.routes';
import { ProductRouter } from './Product.routes';

export const routes = Router();

routes.use('/categories', CategoryRouter);
routes.use('/orders', OrderRouter);
routes.use('/products', ProductRouter);
