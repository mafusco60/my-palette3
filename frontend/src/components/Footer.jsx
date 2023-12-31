import { Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer>
				<br />
				<br />
				<div className='nav-line'>
					<Navigation className='nav-footer' />
				</div>
				<div>
					<div className='text-center '>
						<SocialLinks />
					</div>
					<Row>
						<Col className='logo-footer text-dk py-5'>
							<LinkContainer to='/'>
								<p>Mary Anne's Palette &copy; {currentYear}</p>
							</LinkContainer>
						</Col>
					</Row>
				</div>
			</footer>
		</>
	);
};
export default Footer;
