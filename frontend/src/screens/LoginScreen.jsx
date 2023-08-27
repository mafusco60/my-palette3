import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useAuthMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
	const [emailSignIn, setEmailSignIn] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, { isLoading }] = useAuthMutation();

	const { userInfo } = useSelector((state) => state.auth);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, redirect, navigate]);

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await login({ emailSignIn, password }).unwrap();
			const temp2 = dispatch(setCredentials({ ...res }));
			console.log('temp2', temp2); //ok
			navigate(redirect);
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	return (
		<FormContainer>
			<h1 className='screen-title '>Sign In</h1>

			<Form onSubmit={submitHandler}>
				<Form.Group className='my-3' controlId='email'>
					<Form.Label className=' '>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={emailSignIn}
						onChange={(e) => setEmailSignIn(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group className='my-2' controlId='password'>
					<Form.Label className=' '>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button
					type='submit'
					variant='primary'
					className='mt-2'
					disabled={isLoading}
				>
					Sign In
				</Button>

				{isLoading && <Loader />}
			</Form>

			<Row className='py-3'>
				<Col className=' '>
					New Customer? {'  '}
					<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default LoginScreen;
