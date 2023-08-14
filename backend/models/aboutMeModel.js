import mongoose from 'mongoose';

const aboutMeSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		number: { type: Number, unique: true, required: true },
		paragraph: { type: String, required: true },
	},
	{ timestamps: true }
);
const AboutMe = mongoose.model('AboutMe', aboutMeSchema);

export default AboutMe;
