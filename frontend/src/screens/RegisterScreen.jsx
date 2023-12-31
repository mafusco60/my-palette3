import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const RegisterScreen = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailSignIn, setEmailSignIn] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [register, { isLoading }] = useRegisterMutation();

	const { userInfo } = useSelector((state) => state.auth);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			<Message variant='danger'>'Passwords do not match'</Message>;
		} else {
			try {
				const res = await register({
					firstName,
					lastName,
					emailSignIn,
					password,
				}).unwrap();
				dispatch(setCredentials({ ...res }));
				navigate(redirect);
			} catch (err) {
				<Message variant='danger'>{err}</Message>;
			}
		}
	};

	return (
		<FormContainer>
			<h1>Register</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group className='my-2' controlId='firstname'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter first name'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='my-2' controlId='lastname'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter last name'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group className='my-2' controlId='emailsignin'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={emailSignIn}
						onChange={(e) => setEmailSignIn(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group className='my-2' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='my-2' controlId='confirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Confirm password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Register
				</Button>

				{isLoading && <Loader />}
			</Form>
			<Row className='py-3'>
				<Col>
					Already have an account?{' '}
					<Link
						to={redirect ? `/users/auth?redirect=${redirect}` : '/users/auth'}
					>
						Login
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default RegisterScreen;
