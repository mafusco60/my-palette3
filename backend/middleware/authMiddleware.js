import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
	// let token;
	console.log('protect', protect);

	//Read the JWT from the cookie
	const token = req.cookies.jwt; //PROBLEM HERE
	console.log('token-auth-middleware', req.cookies.jwt); //undefined
	console.log('req.cookies:', req.cookies); //null prototype
	console.log('req.headers.cookie:', req.headers.cookie); //undefined

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await User.findById(decoded.userId).select('-password');
			console.log('User from token', req.user); //-password
			next();
		} catch (err) {
			console.error(err);
			res.status(401);
			throw new Error('Not authorized, token failed');
		}
	} else {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

//Admin middleware
const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		console.log('isAdmin', req.user.isAdmin);
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as admin');
	}
};
export { protect, admin };
