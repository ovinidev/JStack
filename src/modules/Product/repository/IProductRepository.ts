import { ICreateProductDTO } from '../interfaces/ICreateProductDTO';
import { IProduct } from '../interfaces/IProduct';

export interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>;
  findAll(): Promise<IProduct[]>;
  findById(categoryId: string): Promise<IProduct>;
}
