import { ICategory } from '../interfaces/ICategory';
import { ICreateCategoryDTO } from '../interfaces/ICreateCategoryDTO';

export interface ICategoryRepository {
  create({ name, icon }: ICreateCategoryDTO): Promise<ICategory>;
  findAll(): Promise<ICategory[]>;
}
