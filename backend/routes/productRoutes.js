//import asyncHandler from '../middleware/asyncHandler.js';
//import Product from '../models/productModel.js';
import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();
import {
	getProducts,
	getProductDetails,
	createProduct,
	updateProduct,
	deleteProduct,
} from '../controllers/productController.js';

//router.get('/top', getTopProducts);
router.route('/').get(getProducts).post(protect, admin, createProduct);
//router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router
	.route('/:id')
	.get(checkObjectId, getProductDetails)
	.put(protect, admin, checkObjectId, updateProduct)
	.delete(protect, admin, checkObjectId, deleteProduct);

export default router;
