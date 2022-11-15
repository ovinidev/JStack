import { ListProductByCategoryUseCase } from './ListProductByCategoryUseCase';
import { ListProductByCategoryController } from './ListProductByCategoryController';
import { ProductRepository } from '../../repository/ProductRepository';

export default () => {
  const productCategory = new ProductRepository();

  const listProductByCategoryUseCase = new ListProductByCategoryUseCase(
    productCategory,
  );

  const listProductByCategoryController = new ListProductByCategoryController(
    listProductByCategoryUseCase,
  );

  return listProductByCategoryController;
};
