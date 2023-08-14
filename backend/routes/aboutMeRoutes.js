//import asyncHandler from '../middleware/asyncHandler.js';
//import FAQs from '../models/faqsModel.js';
import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
	getAboutMe,
	updateAboutMe,
	deleteAboutMe,
} from '../controllers/aboutMeController.js';

router.route('/').get(getAboutMe);

router.route('/:id').put(admin, updateAboutMe).delete(admin, deleteAboutMe);
export default router;
