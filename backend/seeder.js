import mongoose from 'mongoose';
import dotenv from 'dotenv';
import faqs from './data/faqs.js';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import aboutMe from './data/aboutMe.js';
import AboutMe from './models/aboutMeModel.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import FAQs from './models/faqsModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();
		await FAQs.deleteMany();
		await AboutMe.deleteMany();
		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		const sampleFAQs = faqs.map((faq) => {
			return { ...faq, user: adminUser };
		});

		const sampleAboutMe = aboutMe.map((aboutMe) => {
			return { ...aboutMe, user: adminUser };
		});
		await Product.insertMany(sampleProducts);
		await FAQs.insertMany(sampleFAQs);
		await AboutMe.insertMany(sampleAboutMe);
		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};
const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();
		await FAQs.deleteMany();
		await AboutMe.deleteMany();

		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};
if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
// To run this file, we need to add a script to package.json:
// "data:import": "node backend/seeder",
// "data:destroy": "node backend/seeder -d",
// To import data, we run:
// npm run data:import
// To destroy data, we run:
// npm run data:destroy
