import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
	return (
		<>
			<Link to='https://www.facebook.com/Maryannespalette'>
				<FaFacebook className='social-icon-blue' />
			</Link>
			<Link to='https://www.instagram.com/maryannefusco/'>
				<FaInstagram className='social-icon-pink' />
			</Link>
		</>
	);
};

export default SocialLinks;
