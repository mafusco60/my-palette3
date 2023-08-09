import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
	try {
		console.log('Header');
	} catch (error) {
		console.log('error Header');
	}

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
						<Link to='/'>
							<Image className='logo' src='/images/favicon.png' alt='logo' />
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<FaShoppingCart className='icon-dk' />
									Cart
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to='auth'>
								<Nav.Link>
									<FaUser className='icon-dk' />
									Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
