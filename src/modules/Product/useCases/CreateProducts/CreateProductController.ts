import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const imagePath = req.file?.filename;
      const { name, description, price, category, ingredients } = req.body;

      this.createProductUseCase.execute({
        name,
        description,
        price,
        category,
        ingredients,
        imagePath,
      });

      return res.status(201).json({ message: 'Created' });
    } catch {
      return res.status(400).json({ error: 'Unexpected error.' });
    }
  }
}
