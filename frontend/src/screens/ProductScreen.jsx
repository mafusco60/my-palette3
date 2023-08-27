import React from 'react';
import ProductOrderCard from '../components/ProductOrderCard';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
	const { id: productId } = useParams();
	const {
		data: product,
		isLoading,
		error,
	} = useGetProductDetailsQuery(productId);

	const [isEnlarged, setIsEnlarged] = useState(false);

	const clickHandler = () => {
		setIsEnlarged(!isEnlarged);
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message>{error?.data?.message || error.error}</Message>
			) : (
				<Card className='single-product-card'>
					<Card.Body>
						<Col>
							<Row>
								<h2>{product.name}</h2>

								<Image
									src={product.image}
									alt={product.name}
									onClick={clickHandler}
									className={
										!product.portrait
											? isEnlarged
												? 'image-land-lg'
												: 'image-land-med'
											: isEnlarged
											? 'image-lg'
											: 'image-med'
									}
								/>
							</Row>
						</Col>
						<Col className={isEnlarged ? 'disappear' : 'reappear'}>
							<ProductOrderCard />
						</Col>

						<h4
							className={!product.portrait ? 'single-product-description' : ''}
						>
							{product.description}
						</h4>
					</Card.Body>
				</Card>
			)}
			<LinkContainer to='/gallery'>
				<h3 className='label-dk-txt'>Browse the Gallery</h3>
			</LinkContainer>
		</>
	);
};

export default ProductScreen;
