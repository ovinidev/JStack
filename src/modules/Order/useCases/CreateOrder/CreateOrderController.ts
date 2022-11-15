import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { table, products } = request.body;

      await this.createOrderUseCase.execute({ table, products });

      return response
        .status(204)
        .json({ message: 'Order created successfully.' });
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
