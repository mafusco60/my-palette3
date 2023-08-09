import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
	try {
		console.log('HomeScreen');
	} catch (error) {
		console.log('error HomeScreen');
	}
	return (
		<>
			<h1 className='screen-title'>Welcome to Mary Anne's Palette</h1>

			<ImageCarousel />

			<LinkContainer to='/gallery'>
				<h3 className='label-dk-txt'>Browse the Gallery</h3>
			</LinkContainer>
		</>
	);
};

export default HomeScreen;
