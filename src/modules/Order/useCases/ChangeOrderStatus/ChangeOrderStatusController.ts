import { Request, Response } from 'express';
import { ChangeOrderStatusUseCase } from './ChangeOrderStatusUseCase';

export class ChangeOrderStatusController {
  constructor(private changeOrderStatusUseCase: ChangeOrderStatusUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { orderId } = req.params;
      const { status } = req.body;

      await this.changeOrderStatusUseCase.execute(orderId, status);

      return res.status(204).send('Order status changed successfully.');
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
