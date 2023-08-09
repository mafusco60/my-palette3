import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		lastName: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		emailSignIn: {
			type: String,
			required: true,
			unique: true,
		},
		emailSecondary: {
			type: String,
			required: false,
			unique: false,
		},

		password: {
			type: String,
			required: true,
		},

		secretHint: {
			type: String,
			required: false,
		},

		cellPhoneNumber: {
			type: String,
			required: false,
		},
		defaultShippingAddress: {
			fullName: { type: String, required: false },
			address: { type: String, required: false },
			city: { type: String, required: false },
			state: { type: String },
			postalCode: { type: String, required: false },
			country: { type: String, required: false },
		},

		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

export default User;
