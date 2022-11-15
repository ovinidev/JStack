import { Request, Response, Router } from 'express';

export const ProductRouter = Router();

ProductRouter.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});
