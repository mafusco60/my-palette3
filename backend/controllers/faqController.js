import { request } from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import FAQs from '../models/faqsModel.js';

// @desc    Fetch all FAQs
// @route   GET /api/faqs
// @access  Public
const getFAQs = asyncHandler(async (req, res) => {
	const faqs = await FAQs.find({});
	if (faqs) {
		res.status(201).json(faqs);
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

// @desc    Fetch single FAQ
// @route   GET /api/faqs/:id
// @access  Public
const getFAQDetails = asyncHandler(async (req, res) => {
	const faq = await FAQs.findById(req.params.id);
	if (faq) {
		return res.status(201).json(faq);
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

// @desc    Create a FAQ
// @route   POST /api/faqs
// @access  Private/Admin
const createFAQ = asyncHandler(async (req, res) => {
	const { buzzWords, question, answer } = req.body;

	const faq = await FAQs.create({
		buzzWords,
		question,
		answer,
	});

	const createdFAQ = await faq.save();
	res.status(201).json(createdFAQ);
});

// @desc    Update a FAQ
// @route   PUT /api/faqs/:id
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
		throw new Error('FAQ not found');
	}
});

// @desc    Delete a FAQ
// @route   DELETE /api/faqs/:id
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

export { getFAQs, getFAQDetails, createFAQ, updateFAQ, deleteFAQ };
