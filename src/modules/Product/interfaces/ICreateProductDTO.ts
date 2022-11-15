import { Types } from 'mongoose';

export interface Ingredients {
  name: string;
  icon: string;
}

export interface ICreateProductDTO {
  name: string;
  description: string;
  imagePath: string | undefined;
  price: number;
  ingredients?: Ingredients[];
  category: Types.ObjectId;
}
