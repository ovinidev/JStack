import { ICreateProductDTO } from '../../interfaces/ICreateProductDTO';
import { IProductRepository } from '../../repository/IProductRepository';

export class CreateProductUseCase {
  constructor(private productsRepository: IProductRepository) {}

  async execute({
    name,
    description,
    price,
    category,
    ingredients,
    imagePath,
  }: ICreateProductDTO) {
    return await this.productsRepository.create({
      name,
      description,
      price,
      category,
      ingredients,
      imagePath,
    });
  }
}
