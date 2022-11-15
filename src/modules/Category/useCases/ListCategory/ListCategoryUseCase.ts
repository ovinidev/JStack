import { ICategory } from '../../interfaces/ICategory';
import { ICategoryRepository } from '../../repository/ICategoryRepository';

export class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<ICategory[]> {
    return this.categoryRepository.findAll();
  }
}
