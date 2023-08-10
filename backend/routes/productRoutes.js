import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
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

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		}
		res.status(404).json({ message: 'Product not found' });
	})
);
export default router;
