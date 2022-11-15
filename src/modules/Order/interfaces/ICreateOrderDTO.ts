export interface ICreateOrderDTO {
  table: string;
  products: [{ product: string; quantity: number }];
}
