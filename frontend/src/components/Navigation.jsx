import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar expand='lg'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto text-center nav-header-footer'>
					<Link to='/' className='nav-header-footer'>
						Home
					</Link>
					<Link to='/gallery' className='nav-header-footer'>
						Gallery
					</Link>
					<Link to='/faqs' className='nav-header-footer'>
						FAQ's
					</Link>
					<Link to='/aboutme' className='nav-header-footer'>
						About
					</Link>
					<Link to='/services' className='nav-header-footer'>
						Services
					</Link>
					<Link to='/contact' className='nav-header-footer'>
						Contact
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default Navigation;
