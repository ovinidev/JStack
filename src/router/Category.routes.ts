import { Request, Response, Router } from 'express';
import listCategoryController from '../modules/Category/useCases/ListCategory';
import createCategoryController from '../modules/Category/useCases/CreateCategory';

export const CategoryRouter = Router();

CategoryRouter.get('/', (req: Request, res: Response) => {
  return listCategoryController().handle(req, res);
});

CategoryRouter.get('/:categoryId/products', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});

CategoryRouter.post('/', (req: Request, res: Response) => {
  return createCategoryController().handle(req, res);
});
