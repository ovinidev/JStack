import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await this.listCategoryUseCase.execute();

      return res.json(categories);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
