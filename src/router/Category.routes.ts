import { Request, Response, Router } from 'express';
import listCategoryController from '../modules/Category/useCases/ListCategory';
import createCategoryController from '../modules/Category/useCases/CreateCategory';
import listProductByCategoryController from '../modules/Product/useCases/ListProductByCategory';

export const CategoryRouter = Router();

CategoryRouter.get('/', (req: Request, res: Response) => {
  return listCategoryController().handle(req, res);
});

CategoryRouter.get('/:categoryId/products', (req: Request, res: Response) => {
  return listProductByCategoryController().handle(req, res);
});

CategoryRouter.post('/', (req: Request, res: Response) => {
  return createCategoryController().handle(req, res);
});
