/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ICreateProductDTO } from '../interfaces/ICreateProductDTO';
import { IProduct } from '../interfaces/IProduct';
import { Product } from '../models/Product';
import { IProductRepository } from './IProductRepository';

export class ProductRepository implements IProductRepository {
  async create(data: ICreateProductDTO): Promise<void> {
    await Product.create({
      name: data.name,
      description: data.description,
      imagePath: data.imagePath,
      price: Number(data.price),
      category: data.category,
      ingredients: data.ingredients
        ? JSON.parse(data.ingredients.toString())
        : [],
    });
  }

  async findAll(): Promise<IProduct[]> {
    return Product.find();
  }

  async findById(categoryId: string): Promise<IProduct> {
    // @ts-ignore
    return await Product.find().where('category').equals(categoryId);
  }
}
