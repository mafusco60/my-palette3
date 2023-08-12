import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema(
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
// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};
// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
	// if password is not modified, move on

	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model('User', userSchema);

export default User;
