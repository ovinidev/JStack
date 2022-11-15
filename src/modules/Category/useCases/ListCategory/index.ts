import { CategoryRepository } from '../../repository/CategoryReṕsitory';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

export default () => {
  const categoryRepository = new CategoryRepository();

  const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

  const listCategoryController = new ListCategoryController(
    listCategoryUseCase,
  );

  return listCategoryController;
};
