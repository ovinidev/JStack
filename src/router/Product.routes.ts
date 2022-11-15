import path from 'node:path';
import { Request, Response, Router } from 'express';
import multer from 'multer';
import listProductsController from '../modules/Product/useCases/ListProducts';
import createProductController from '../modules/Product/useCases/CreateProducts';

export const ProductRouter = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

ProductRouter.get('/', (req: Request, res: Response) => {
  return listProductsController().handle(req, res);
});

ProductRouter.post(
  '/',
  upload.single('image'),
  (req: Request, res: Response) => {
    return createProductController().handle(req, res);
  },
);
