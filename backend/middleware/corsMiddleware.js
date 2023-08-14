import asyncHandler from './asyncHandler.js';
import { BASE_URL } from '../../frontend/src/constants.js';

app.use((req, res, next) => {
	// res.header('Access-Control-Allow-Origin', '*'); // Replace * with the allowed origin
	res.header('Access-Control-Allow-Origin', BASE_URL);

	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});
