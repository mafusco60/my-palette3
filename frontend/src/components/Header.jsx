import {
	Navbar,
	Nav,
	Container,
	Image,
	Badge,
	NavDropdown,
} from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';

import SearchBox from './SearchBox';

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate('/login');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<header>
			<Navbar className='bg-gold-lt' expand='md' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand className='logo-header'>
							Mary Anne's Palette
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Brand>
						<LinkContainer to='/'>
							<Image className='logo' src='/images/favicon.png' alt='logo' />
						</LinkContainer>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<SearchBox />
							<LinkContainer to='/cart'>
								<Nav.Link>
									<FaShoppingCart className='icon-dk' />
									Cart
									{cartItems.length > 0 && (
										<Badge pill bg='success' style={{ marginLeft: '5px' }}>
											{cartItems.reduce((a, c) => a + c.qty, 0)}
										</Badge>
									)}
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<>
									<NavDropdown title={userInfo.firstName} id='username'>
										<LinkContainer to='/profile'>
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								<LinkContainer to='/auth'>
									<Nav.Link>
										<FaUser className='icon-dk' />
										Sign In
									</Nav.Link>
								</LinkContainer>
							)}

							{/* Admin Links */}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
