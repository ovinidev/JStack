import { IProduct } from '../../interfaces/IProduct';
import { IProductRepository } from '../../repository/IProductRepository';

export class ListProductsUseCase {
  constructor(private productsRepository: IProductRepository) {}

  async execute(): Promise<IProduct[]> {
    return this.productsRepository.findAll();
  }
}
