import asyncHandler from '../middleware/asyncHandler.js';
import AboutMe from '../models/aboutMeModel.js';

const getAboutMeParagraphs = asyncHandler(async (req, res) => {
	const aboutMe = await AboutMe.find({});
	if (aboutMe) {
		res.status(201).json(aboutMe);
	} else {
		res.status(404);
		throw new Error('Resource not found');
	}
});

// @desc    Update paragraph//
// @route   PUT /api/aboutMe/
// @access  Private / Admin

const updateAboutMeParagraph = asyncHandler(async (req, res) => {
	const aboutMe = await aboutMe.findById(req.params.id);
	if (aboutMe) {
		const updateAboutMeParagraphs = asyncHandler(async (req, res) => {
			const { _id, number } = req.body;

			const aboutMe = await AwaitMe.findById(req.params.id);

			if (aboutMe) {
				aboutMe.number = number;
				aboutMe.paragraph = paragraph;

				const updatedAboutMeParagraph = await aboutMe.save();
				res.json(updatedAboutMe);
			} else {
				res.status(404);
				throw new Error('AboutMeParagraph not found');
			}
		});
	}
});

// @desc    Delete a paragraph
// @route   DELETE /api/about
// @access  Private/Admin
const deleteAboutMeParagraph = asyncHandler(async (req, res) => {
	const aboutMe = await AboutMe.findById(req.params.id);

	if (aboutMe) {
		await Product.deleteOne({ _id: aboutMe._id });
		res.json({ message: 'Paragraph removed' });
	} else {
		res.status(404);
		throw new Error('Paragraph not found');
	}
	export {
		updateAboutMeParagraph,
		deleteAboutMeParagraph,
		getAboutMeParagraphs,
	};
});
