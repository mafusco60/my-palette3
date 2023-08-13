import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

const productSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: false,
			default: '11"x14"',
		},
		medium: {
			type: String,
			required: false,
			default: 'Mixed Media',
		},
		description: {
			type: String,
			required: false,
			default: 'Original Artwork',
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: false,
			default: 5,
		},
		numReviews: {
			type: Number,
			required: false,
			default: 0,
		},
		category: {
			type: String,
			required: false,
			default: 'Original Artwork',
		},
		print: {
			type: Boolean,
			required: false,
			default: false,
		},
		price: {
			type: Number,
			required: false,
			default: 75,
		},
		digital: {
			type: Boolean,
			required: false,
			default: false,
		},
		shippingWeight: {
			type: Number,
			required: false,
			default: 2,
		},
		portrait: {
			type: Boolean,
			required: false,
			default: true,
		},
		count: {
			type: Number,
			required: false,
			default: 1,
		},
		buzzWords: {
			type: String,
			required: false,
			default: 'Original Artwork',
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
