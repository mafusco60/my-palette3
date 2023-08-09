import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

//import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { setCredentials } from '../slices/authSlice';

const UserScreen = () => {
	const [lastName, setLastName] = useState('');
	const [emailSignIn, setEmailSignIn] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const { userInfo } = useSelector((state) => state.auth);

	//const { data: orders, isLoading, error } = useGetMyOrdersQuery();

	const [updateProfile, { isLoading: loadingUpdateProfile }] =
		useProfileMutation();

	useEffect(() => {
		setLastName(userInfo.lastName);
		setEmailSignIn(userInfo.emailSignIn);
	}, [userInfo.emailSignIn, userInfo.lastName]);

	const dispatch = useDispatch();
	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			//toast.error('Passwords do not match');
		} else {
			try {
				const res = await updateProfile({
					_id: userInfo._id,
					lastName: userInfo.lastName,
					firstName: userInfo.firstName,
					emailSignIn: userInfo.emailSignIn,
					emailSecondary: userInfo.emailSecondary,
					password: userInfo.password,
					secretHint: userInfo.secretHint,
					cellPhoneNumber: userInfo.cellPhoneNumber,
					defaultShippingAddress: userInfo.defaultShippingAddress,
					fullName: userInfo.fullName,
					address: userInfo.address,
					city: userInfo.city,
					state: userInfo.state,
					zipCode: userInfo.zipCode,
					country: userInfo.country,

					isAdmin: userInfo.isAdmin,
				}).unwrap();
				dispatch(setCredentials({ ...res }));
				//toast.success('Profile updated successfully');
			} catch (err) {
				//toast.error(err?.data?.message || err.error);
			}
		}
	};

	return (
		<Row>
			<Col md={3}>
				<h2>User Profile</h2>

				<Form onSubmit={submitHandler}>
					<Form.Group className='my-2' controlId='lastName'>
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type='name'
							placeholder='Enter last name'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group className='my-2' controlId='emailSignIn'>
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
						Update
					</Button>
					{loadingUpdateProfile && <Loader />}
				</Form>
			</Col>
			<Col md={9}>
				{/* <h2>My Orders</h2>
				{isLoading ? (
					<Loader />
				) : error ? (
					// <Message variant='danger'>
					// 	{error?.data?.message || error.error}
					// </Message>
					''
				) : (
					<Table striped hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>DATE</th>
								<th>TOTAL</th>
								<th>PAID</th>
								<th>DELIVERED</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>{order.totalPrice}</td>
									<td>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<FaTimes style={{ color: 'red' }} />
										)}
									</td>
									<td>
										{order.isDelivered ? (
											order.deliveredAt.substring(0, 10)
										) : (
											<FaTimes style={{ color: 'red' }} />
										)}
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button className='btn-sm' variant='light'>
												Details
											</Button>
										</LinkContainer> */}
				{/* </td> */}
				{/* </tr>
							))} */}
				{/* </tbody>
					</Table> */}
				{/* )} */}
			</Col>
		</Row>
	);
};

export default UserScreen;
