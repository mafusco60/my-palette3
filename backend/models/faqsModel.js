import mongoose from 'mongoose';

const FAQsSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		question: { type: String, required: true },
		answer: { type: String, required: true },
		buzzWords: { type: String, required: true },
	},
	{ timestamps: true }
);
const FAQs = mongoose.model('FAQs', FAQsSchema);

export default FAQs;
