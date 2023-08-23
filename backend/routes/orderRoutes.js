import express from 'express';
import {
	addOrderItems,
	getMyOrders,
	getOrderDetails,
	updateOrderToPaid,
	updateOrderToDelivered,
	getOrders,
} from '../controllers/orderController.js';
import checkObjectId from '../middleware/checkObjectId.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(getMyOrders);
router.route('/:id').get(protect, getOrderDetails);
router.route('/:id/pay').put(protect, admin, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
