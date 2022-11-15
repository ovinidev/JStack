import { IProduct } from '../../interfaces/IProduct';
import { IProductRepository } from '../../repository/IProductRepository';

export class ListProductByCategoryUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(categoryId: string): Promise<IProduct> {
    return await this.productRepository.findById(categoryId);
  }
}
