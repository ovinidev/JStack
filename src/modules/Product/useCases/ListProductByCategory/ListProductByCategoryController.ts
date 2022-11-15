import { Request, Response } from 'express';
import { ListProductByCategoryUseCase } from './ListProductByCategoryUseCase';

export class ListProductByCategoryController {
  constructor(
    private listProductByCategoryUseCase: ListProductByCategoryUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { categoryId } = req.params;

      const product = await this.listProductByCategoryUseCase.execute(
        categoryId,
      );

      return res.status(200).json(product);
    } catch {
      return res.status(400).json({ error: 'Unexpected error.' });
    }
  }
}
