import { ICategory } from '../../interfaces/ICategory';
import { ICreateCategoryDTO } from '../../interfaces/ICreateCategoryDTO';
import { ICategoryRepository } from '../../repository/ICategoryRepository';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name, icon }: ICreateCategoryDTO): Promise<ICategory> {
    return await this.categoryRepository.create({ name, icon });
  }
}
