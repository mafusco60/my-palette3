import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
	useGetUserDetailsQuery,
	useUpdateUserMutation,
} from '../../slices/usersApiSlice';

const UserEditScreen = () => {
	const { id: userId } = useParams();
	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [emailSignIn, setEmailSignIn] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const {
		data: user,
		isLoading,
		error,
		refetch,
	} = useGetUserDetailsQuery(userId);

	const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await updateUser({ userId, lastName, firstName, emailSignIn, isAdmin });
			toast.success('user updated successfully');
			refetch();
			navigate('/userlist');
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	useEffect(() => {
		if (user) {
			setLastName(user.lastName);
			setFirstName(user.firstName);

			setEmailSignIn(user.emailSignIn);
			setIsAdmin(user.isAdmin);
		}
	}, [user]);

	return (
		<>
			<Link to='/userlist' className='btn btn-light my-3'>
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit User</h1>
				{loadingUpdate && <Loader />}
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>
						{error?.data?.message || error.error}
					</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group className='my-2' controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Enter last name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group className='my-2' controlId='email'>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={emailSignIn}
								onChange={(e) => setEmailSignIn(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group className='my-2' controlId='isadmin'>
							<Form.Check
								type='checkbox'
								label='Is Admin'
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}
							></Form.Check>
						</Form.Group>

						<Button type='submit' variant='primary'>
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default UserEditScreen;
