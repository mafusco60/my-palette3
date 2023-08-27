import React from 'react';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom';

const Products = () => {
	const { pageNumber, keyword } = useParams();

	const { data: products, isLoading, error } = useGetProductsQuery();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				products.map((product) => (
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
								<Card.Text>
									{product.digital ? 'starting at ' : ''}${product.price}
								</Card.Text>
							</Card.Body>
						</>
					</Card>
				))
			)}
		</>
	);
};

export default Products;
