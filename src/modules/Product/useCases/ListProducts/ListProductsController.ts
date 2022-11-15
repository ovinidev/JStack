import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

export class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.listProductsUseCase.execute();

      return response.json(products);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
