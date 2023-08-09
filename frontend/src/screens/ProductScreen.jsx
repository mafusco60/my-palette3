import React from 'react';
import ProductOrderCard from '../components/ProductOrderCard';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const ProductScreen = () => {
	//const { data: product } = useGetProductDetailsQuery();
	const { id: productId } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${productId}`);
			setProduct(data);
		};

		fetchProduct();
	}, [productId]);
	console.log('product', product);

	const [isEnlarged, setIsEnlarged] = useState(false);

	const clickHandler = () => {
		setIsEnlarged(!isEnlarged);
	};

	const isPortrait = product.portrait; //Orientation of image

	return (
		<>
			<Card className='single-product-card'>
				<Card.Body>
					<Row>
						<Col>
							<Row>
								<h2 className='label-dk-txt'>{product.name}</h2>
								<Image
									src={product.image}
									alt={product.name}
									onClick={clickHandler}
									className={
										!isPortrait
											? isEnlarged
												? 'image-land-lg'
												: 'image-land'
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
					</Row>

					<Card.Text className='desc-dk-txt-alt'>
						{product.description}
					</Card.Text>
				</Card.Body>
			</Card>
			<LinkContainer to='/gallery'>
				<h3 className='label-dk-txt'>Browse the Gallery</h3>
			</LinkContainer>
		</>
	);
};

export default ProductScreen;
