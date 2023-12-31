import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
	console.log('within generateToken', token, ',', process.env.JWT_SECRET); //values good

	// Set JWT as an HTTP-Only cookie
	res.cookie('jwt', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== 'development',
		sameSite: 'strict', // Prevent CSRF attacks
		// maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		maxAge: 360000, // 1 hour
	});
};

export default generateToken;
