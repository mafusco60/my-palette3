import React from 'react';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const Products = () => {
	//const { pageNumber, keyword } = useParams()
	try {
		console.log('Products Component');
	} catch (error) {
		console.log('error Products Component');
	}
	const { data: products, isLoading, error } = useGetProductsQuery();

	console.log('data- Products for GalleryScreen', products);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error?.data?.message || error.error}</div>
			) : (
				products.map((product) => (
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
				))
			)}
		</>
	);
};

export default Products;
