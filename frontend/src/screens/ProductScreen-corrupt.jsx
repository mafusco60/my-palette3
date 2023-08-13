import ProductOrderCard from '../components/ProductOrderCard';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
const ProductScreen = () => {
	const { id: productId } = useParams();
	const large = window.innerWidth > 768;
	return (
		<>
			<>
				<Product />
			</>
			<Row>
				<Col className={large ? 'disappear' : 'reappear'}>
					<ProductOrderCard />
				</Col>
			</Row>
			<>
				<LinkContainer to='/gallery'>
					<h3 className='label-dk-txt'>Browse the Gallery</h3>
				</LinkContainer>
			</>
		</>
	);
};

export default ProductScreen;
