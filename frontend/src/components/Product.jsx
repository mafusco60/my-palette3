import React from 'react';
import ProductOrderCard from '../components/ProductOrderCard';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';
import express from 'express';

const Product = () => {
	const { id: productId } = useParams();
	const {
		data: product,
		isLoading,
		error,
	} = useGetProductDetailsQuery(productId);

	console.log('product', productId, product);
	const [isEnlarged, setIsEnlarged] = useState(false);

	const clickHandler = () => {
		setIsEnlarged(!isEnlarged);
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error?.data?.message || error.error}</div>
			) : (
				<Card className='single-product-card'>
					<Card.Body>
						<Row>
							<Col>
								<h2 className='label-dk-txt'>{product.name}</h2>
								<Image
									src={product.image}
									alt={product.name}
									onClick={clickHandler}
									className={
										!product.portrait
											? isEnlarged
												? 'image-land-lg'
												: 'image-land'
											: isEnlarged
											? 'image-lg'
											: 'image-med'
									}
								/>
							</Col>
						</Row>

						<Card.Text className='desc-dk-txt-alt desc-rel-pos'>
							{product.description}
						</Card.Text>
					</Card.Body>
				</Card>
			)}
		</>
	);
};
export default Product;
