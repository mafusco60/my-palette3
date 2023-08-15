import asyncHandler from '../middleware/asyncHandler.js';
import AboutMe from '../models/aboutMeModel.js';

const getAboutMe = asyncHandler(async (req, res) => {
	const aboutMe = await AboutMe.find({});
	if (aboutMe) {
		res.status(201).json(aboutMe);
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

const createAboutMe = asyncHandler(async (req, res) => {
	const { number, paragraph } = req.body;
	const aboutMe = await AboutMe.create({
		user: req.user._id,
		number,
		paragraph,
	});

	const createdAboutMe = await aboutMe.save();
	res.status(201).json(createdAboutMe);
});

// @desc    Update paragraph//
// @route   PUT /api/aboutMe/
// @access  Private / Admin

const updateAboutMe = asyncHandler(async (req, res) => {
	const { _id, number } = req.body;

	const aboutMe = await AboutMe.findById(req.params.id);

	if (aboutMe) {
		aboutMe.number = number;
		aboutMe.paragraph = paragraph;

		const updatedAboutMe = await aboutMe.save();
		res.json(updatedAboutMe);
	} else {
		res.status(404);
		throw new Error('AboutMe not found');
	}
});

// @desc    Delete a paragraph
// @route   DELETE /api/about
// @access  Private/Admin
const deleteAboutMe = asyncHandler(async (req, res) => {
	const aboutMe = await AboutMe.findById(req.params.id);

	if (aboutMe) {
		await Product.deleteOne({ _id: aboutMe._id });
		res.json({ message: 'Paragraph removed' });
	} else {
		res.status(404);
		throw new Error('Paragraph not found');
	}
});

export { createAboutMe, updateAboutMe, deleteAboutMe, getAboutMe };
