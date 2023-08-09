import asyncHandler from '../middleware/asyncHandler.js';
import FAQs from '../models/faqsModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getFaqs = asyncHandler(async (req, res) => {
	const faqs = await FAQs.find({});
	if (faqs) {
		res.status(201).json(faqs);
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getFAQDetails = asyncHandler(async (req, res) => {
	const faq = await Product.findById(req.params.id);
	if (faq) {
		return res.status(201).json(faq);
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createFAQ = asyncHandler(async (req, res) => {
	const faq = new FAQs({
		buzzWords: 'Sample buzz words',
		question: 'Sample question',
		answer: 'Sample answer',
	});

	const createdFAQ = await product.save();
	res.status(201).json(createdFAQ);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateFAQ = asyncHandler(async (req, res) => {
	const { buzzWords, question, answer } = req.body;

	const faq = await FAQs.findById(req.params.id);

	if (faq) {
		faq.buzzWords = buzzWords;
		faq.question = question;
		faq.answer = answer;

		const updatedFAQ = await faq.save();
		res.json(updatedFAQ);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteFAQ = asyncHandler(async (req, res) => {
	const faq = await FAQs.findById(req.params.id);

	if (faq) {
		await FAQs.deleteOne({ _id: faq._id });
		res.json({ message: 'FAQ removed' });
	} else {
		res.status(404);
		throw new Error('FAQ not found');
	}
});

export { getFaqs, getFAQDetails, createFAQ, updateFAQ, deleteFAQ };
