import { ICategoryRepository } from './ICategoryRepository';
import { Category } from '../models/Category';
import { ICategory } from '../interfaces/ICategory';
import { ICreateCategoryDTO } from '../interfaces/ICreateCategoryDTO';

export class CategoryRepository implements ICategoryRepository {
  async create({ name, icon }: ICreateCategoryDTO): Promise<ICategory> {
    return await Category.create({ name, icon });
  }

  async findAll(): Promise<ICategory[]> {
    return await Category.find();
  }
}
