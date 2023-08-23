import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
	createAboutMe,
	getAboutMe,
	updateAboutMe,
	deleteAboutMe,
} from '../controllers/aboutMeController.js';

router.route('/').get(getAboutMe).post(admin, createAboutMe);
router.route('/:id').put(admin, updateAboutMe).delete(admin, deleteAboutMe);
export default router;
