//import asyncHandler from '../middleware/asyncHandler.js';
//import FAQs from '../models/faqsModel.js';
import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();
import {
	getFaqs,
	getFAQDetails,
	createFAQ,
	updateFAQ,
	deleteFAQ,
} from '../controllers/faqController.js';

//router.get('/top', getTopProducts);
router.route('/').get(getFaqs).post(protect, admin, createFAQ);
//router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router
	.route('/:id')
	.get(checkObjectId, getFAQDetails)
	.put(protect, admin, checkObjectId, updateFAQ)
	.delete(protect, admin, checkObjectId, deleteFAQ);

export default router;
