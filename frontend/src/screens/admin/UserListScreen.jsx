import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
	useDeleteUserMutation,
	useGetUserDetailsQuery,
	useGetUsersQuery,
} from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';

const UserListScreen = () => {
	const { data: users, refetch, isLoading, error } = useGetUsersQuery();

	const [deleteUser] = useDeleteUserMutation();
	const deleteHandler = async (id) => {
		const user = users.find((user) => user._id === id);

		if (
			window.confirm(
				`Are you sure you want to delete ${user.firstName} ${user.lastName}?`
			)
		) {
			try {
				console.log('deleteHandler', id);
				await deleteUser(id);
				refetch();
			} catch (err) {
				console.log('deleteHandler err', err);
				toast.error(err?.data?.message || err.error);
			}
		}
	};
	return (
		<>
			<h1>Users</h1>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<Table striped bordered hover responsive className='table-sm'>
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADMIN</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user._id}</td>
								<td>{`${user.firstName} ${user.lastName}`}</td>
								<td>
									<a href={`mailto:${user.emailSignIn}`}>{user.emailSignIn}</a>
								</td>
								<td>
									{user.isAdmin ? (
										<FaCheck style={{ color: 'green' }} />
									) : (
										<FaTimes style={{ color: 'red' }} />
									)}
								</td>
								<td>
									{!user.isAdmin && (
										<>
											<LinkContainer
												to={`../users/${user._id}/edit`}
												style={{ marginRight: '10px' }}
											>
												<Button variant='light' className='btn-sm'>
													<FaEdit />
												</Button>
											</LinkContainer>
											<Button
												variant='danger'
												className='btn-sm'
												onClick={() => deleteHandler(user._id)}
											>
												<FaTrash style={{ color: 'white' }} />
											</Button>
										</>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default UserListScreen;
