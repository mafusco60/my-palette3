import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
	useDeleteUserMutation,
	useGetUsersQuery,
} from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';

const UserListScreen = () => {
	const { data: users, refetch, isLoading, error } = useGetUsersQuery();
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const { data } = await axios.get('/api/users');
	// 		setUsers(data);
	// 	};

	// 	fetchUsers();
	// }, []);

	return (
		<>
			<h1>Users</h1>

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
											to={`./admin/users/${user._id}/`}
											style={{ marginRight: '10px' }}
										>
											<Button variant='light' className='btn-sm'>
												<FaEdit />
											</Button>
										</LinkContainer>
										{/* <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(user._id)}
                      >
                        <FaTrash style={{ color: 'white' }} />
                      </Button> */}
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default UserListScreen;
