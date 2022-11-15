import { ProductRepository } from '../../repository/ProductRepository';
import { ListProductsController } from './ListProductsController';
import { ListProductsUseCase } from './ListProductsUseCase';

export default () => {
  const productRepository = new ProductRepository();

  const listProductsUseCase = new ListProductsUseCase(productRepository);

  const listProductsController = new ListProductsController(
    listProductsUseCase,
  );

  return listProductsController;
};
