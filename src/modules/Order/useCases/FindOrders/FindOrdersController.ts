import { Request, Response } from 'express';
import { FindOrdersUseCase } from './FindOrdersUseCase';

export class FindOrdersController {
  constructor(private findOrdersUseCase: FindOrdersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await this.findOrdersUseCase.execute();

      return res.status(200).json(orders);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
