import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Products from '../components/Products';

const GalleryScreen = () => {
	console.log('gallery');
	return (
		<>
			<Row>
				<h1 className='screen-title'>Gallery</h1>
			</Row>
			<>
				<Row>
					<Products />
				</Row>
			</>
		</>
	);
};

export default GalleryScreen;
