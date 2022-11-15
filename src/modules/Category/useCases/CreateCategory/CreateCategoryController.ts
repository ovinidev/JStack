import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, icon } = req.body;

      if (!name || !icon) {
        return res.status(400).json({ error: 'Missing parameters' });
      }

      const category = await this.createCategoryUseCase.execute({ name, icon });

      return res.status(201).json(category);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
