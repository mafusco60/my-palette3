import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
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
