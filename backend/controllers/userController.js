import asyncHandler from '../middleware/asyncHandler.js';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	const { emailSignIn, password } = req.body;
	console.log(emailSignIn, password); //ok
	const user = await User.findOne({ emailSignIn });
	console.log('after findOne', emailSignIn, user); //ok
	if (user && (await user.matchPassword(password))) {
		console.log('password match ok'); //ok

		generateToken(res, user._id);
		const temp4 = req.cookies.jwt;
		console.log(
			'generate token-auth-middleware- user._id cookie, after generateToken',
			user._id,
			temp4
		); //temp4 is undefined

		res.json({
			_id: user._id,
			lastName: user.lastName,
			firstName: user.firstName,
			emailSignIn: user.emailSignIn,
			password: user.password,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});
// @desc    Find a user by email
// @route   GET /api/users
// @access  Private, Admin
// doesn't work

const getUserByEmail = asyncHandler(async (req, res) => {
	const user = await findOne({ emailSignIn });
	console.log(user);
	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const {
		lastName,
		firstName,
		emailSignIn,
		password,
		emailSecondary,
		secretHint,
		cellPhoneNumber,
	} = req.body;

	const userExists = await User.findOne({ emailSignIn });

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		lastName,
		firstName,
		emailSignIn,
		password,
	});

	if (user) {
		generateToken(res, user._id);
		console.log('user._id: ', user._id);

		res.status(201).json({
			_id: user._id,
			lastName: user.lastName,
			firstName: user.firstName,
			emailSignIn: user.email,
			emailSecondary,
			secretHint,
			cellPhoneNumber,

			isAdmin: user.isAdmin,
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
	const temp5 = req.cookies.jwt;
	console.log('logoutUser', temp5); //undefined
	res.cookie('jwt', '', {
		httpOnly: true,
		expires: new Date(0),
	});
	res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			lastName: user.lastName,
			firstName: user.firstName,
			emailSignIn: user.emailSignIn,
			emailSecondary: user.emailSecondary,
			secretHint: user.secretHint,
			cellPhoneNumber: user.cellPhoneNumber,

			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.lastName = req.body.lastName || user.lastName;
		user.emailSignIn = req.body.emailSignIn || user.emailSignIn;

		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			lastName: updatedUser.lastName,
			firstName: updatedUser.firstName,
			emailSignIn: updatedUser.emailSignIn,
			emailSecondary: updatedUser.emailSecondary,
			secretHint: updatedUser.secretHint,
			cellPhoneNumber: updatedUser.cellPhoneNumber,

			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		if (user.isAdmin) {
			res.status(400);
			throw new Error('Can not delete admin user');
		}
		await User.deleteOne({ _id: user._id });
		res.json({ message: 'User removed' });
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserDetails = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select('-password');

	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		user.lastName = req.body.lastName || user.lastName;
		user.firstName = req.body.firstName || user.firstName;
		user.emailSignIn = req.body.emailSignIn || user.emailSignIn;
		user.emailSecondary = req.body.emailSecondary || user.emailSecondary;
		user.secretHint = req.body.secretHint || user.secretHint;
		user.cellPhoneNumber = req.body.cellPhoneNumber || user.cellPhoneNumber;

		user.isAdmin = Boolean(req.body.isAdmin);

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			lastName: updatedUser.lastName,
			firstName: updatedUser.firstName,
			emailSignIn: updatedUser.emailSignIn,
			emailSecondary: updatedUser.emailSecondary,
			secretHint: updatedUser.secretHint,
			cellPhoneNumber: updatedUser.cellPhoneNumber,

			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

export {
	authUser,
	getUserByEmail,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserDetails,
	updateUser,
};
