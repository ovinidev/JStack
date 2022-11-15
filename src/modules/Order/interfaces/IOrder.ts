export interface IOrder {
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'READY';
  createdAt: Date;
  products: {
    product: string;
    quantity: number;
  }[];
}
