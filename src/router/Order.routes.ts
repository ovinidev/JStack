import { Request, Response, Router } from 'express';

export const OrderRouter = Router();

OrderRouter.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});

OrderRouter.post('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});

OrderRouter.patch('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});
