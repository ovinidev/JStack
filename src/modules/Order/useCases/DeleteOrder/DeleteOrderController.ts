import { Request, Response } from 'express';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

export class DeleteOrderController {
  constructor(private deleteOrderUseCase: DeleteOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;

    try {
      await this.deleteOrderUseCase.execute(orderId);

      return res.status(204).json({ message: 'Order deleted successfully.' });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
