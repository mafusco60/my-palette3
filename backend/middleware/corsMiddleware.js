import asyncHandler from './asyncHandler.js';

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS'); // Include OPTIONS method
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	); // Include Authorization header
	res.header('Access-Control-Expose-Headers', 'Authorization'); // Expose the Authorization header
	if (req.method === 'OPTIONS') {
		// Handle preflight requests
		res.sendStatus(200);
	} else {
		next();
	}
});
