import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
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

const productSchema = mongoose.Schema(
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
			required: true,
		},
		medium: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: false,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: false,
			default: 0,
		},
		category: {
			type: String,
			required: true,
			default: 0,
		},
		print: {
			type: Boolean,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		digital: {
			type: Boolean,
			required: true,
			default: 0,
		},
		shippingWeight: {
			type: Number,
			required: true,
			default: 0,
		},
		portrait: {
			type: Boolean,
			required: true,
			default: true,
		},
		count: {
			type: Number,
			required: true,
			default: 0,
		},
		top5: {
			type: Boolean,
			required: true,
			default: 0,
		},
		buzzWords: {
			type: String,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
