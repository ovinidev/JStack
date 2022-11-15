import { Types } from 'mongoose';
import { Ingredients } from './ICreateProductDTO';

export interface IProduct {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients?: Ingredients;
  category: Types.ObjectId;
}
