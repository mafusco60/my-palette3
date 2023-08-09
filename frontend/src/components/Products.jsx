import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
	//const { data: products } = useGetProductsQuery();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};

		fetchProducts();
	}, []);
	console.log('products', products);

	return (
		<>
			{/* isLoading ? (
			<Loader />) : error ? ( 
			<Message variant='danger'>{error?.data?.message || error.error}</Message>)
			: ( */}
			{products.map((product) => (
				// <Container className='gallery-container'>

				<Card className='gallery-card' key={product._id}>
					<>
						<LinkContainer to={`/products/${product._id}`}>
							<Card.Img
								className={
									product.portrait
										? 'gallery-card-image'
										: 'gallery-card-image-landscape'
								}
								src={product.image}
								alt={product.name}
							/>
						</LinkContainer>

						<Card.Body className='gallery-card-text'>
							<Card.Title className=''>{product.name}</Card.Title>
							<Card.Text className=''>{product.medium}</Card.Text>
							<Card.Text className=''>${product.price}</Card.Text>
						</Card.Body>
					</>
				</Card>
				// </Container>
			))}{' '}
			{/* ) */}
		</>
	);
};

export default Products;