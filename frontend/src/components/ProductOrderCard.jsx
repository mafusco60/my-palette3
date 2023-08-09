import React from 'react';
import {
	Row,
	Col,
	Card,
	ListGroup,
	ListGroupItem,
	Form,
	Button,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';

const ProductOrderCard = () => {
	console.log('ProductOrderCard');
	//const { data: product } = useGetProductDetailsQuery();
	const [product, setProduct] = useState([]);
	const { id: productId } = useParams();
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${productId}`);
			setProduct(data);
		};

		fetchProduct();
	}, [productId]);
	const [qty, setQty] = useState(1);

	const addToCartHandler = () => {
		console.log({ ...product, qty });
		// Message('Item added to cart');
	};

	return (
		<Col md={6}>
			<Card className='product-order-card'>
				<ListGroup variant='flush'>
					<ListGroup.Item className='rounded'>
						<h3 className='text-center'>{product.name}</h3>
					</ListGroup.Item>
					<ListGroup.Item className='rounded'>
						<Row>
							<Col xs={4} className=''>
								Medium:
							</Col>
							<Col xs={7} className='justify-r'>
								{product.medium}
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroupItem className='rounded '>
						<Row>
							<Col xs={4}>Status:</Col>
							<Col xs={7} className='justify-r'>
								{product.count > 0 ? 'Available' : 'SOLD'}
							</Col>
						</Row>
					</ListGroupItem>

					<ListGroupItem className='rounded'>
						<Row>
							<Col xs={4}>Price:</Col>
							<Col xs={7} className='justify-r'>
								${product.price}
							</Col>
						</Row>
					</ListGroupItem>

					{product.count > 0 ? (
						<>
							<ListGroup.Item>
								<Row>
									<Col xs={4}>Size:</Col>
									<Col xs={7} className='justify-r'>
										{product.size}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col xs={4}>Qty:</Col>
									<Col xs={4}></Col>
									<Col xs={3} className='justify-r'>
										<Form.Control
											as='select'
											value={qty}
											onChange={(e) => setQty(Number(e.target.value))}
										>
											{[...Array(product.count).keys()].map((x) => (
												<option key={x + 1} value={x + 1} className='justify-r'>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
								</Row>
							</ListGroup.Item>
						</>
					) : (
						''
					)}
					<Row>
						<Col md={12}>
							<ListGroupItem className='ctr rounded'>
								<Button
									className='btn-block rounded'
									type='button'
									disabled={product.count === 0}
									onClick={addToCartHandler}
								>
									Add to Cart
								</Button>
							</ListGroupItem>
						</Col>
					</Row>
				</ListGroup>
			</Card>
		</Col>
	);
};

export default ProductOrderCard;
