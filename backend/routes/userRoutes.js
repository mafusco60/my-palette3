import express from 'express';
import {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserDetails,
	getUserByEmail,
	updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
	.route('/:id/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);
router
	.route('/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserDetails)
	.put(protect, admin, updateUser);
router.route('/:emailSignIn').get(protect, admin, getUserByEmail);

export default router;
