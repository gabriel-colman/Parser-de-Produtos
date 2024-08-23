import { Router } from 'express';
import { getProduct, getAllProducts, updateProduct, deleteProduct } from '../controllers/ProductController';
import ApiKeyMiddleware from '../middlewares/ApiKeyMiddleware';

const router = Router();

router.get('/products', ApiKeyMiddleware, getAllProducts);
router.get('/products/:code', ApiKeyMiddleware, getProduct);
router.put('/products/:code', ApiKeyMiddleware, updateProduct);
router.delete('/products/:code', ApiKeyMiddleware, deleteProduct);

export default router;
