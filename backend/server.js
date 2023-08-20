import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import aboutMeRoutes from './routes/aboutMeRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 4000;

connectDB();
const app = express();

/****************put in middleware** */
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

// 	res.header('Access-Control-Allow-Credentials', true);
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	);
// 	next();
// });

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

/**************************************** */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/aboutme', aboutMeRoutes);

app.get('/api/config/paypal', (req, res) =>
	res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

if (process.env.NODE_ENV === 'production') {
	const __dirname = path.resolve();
	app.use('/uploads', express.static('/var/data/uploads'));
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	const __dirname = path.resolve();
	app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
