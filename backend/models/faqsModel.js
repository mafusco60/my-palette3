import mongoose from 'mongoose';

const FAQsSchema = new mongoose.Schema({
	buzzWords: { type: String, required: true },
	question: { type: String, required: true },
	answer: { type: String, required: true },
});

const FAQs = mongoose.model('FAQs', FAQsSchema);

export default FAQs;
