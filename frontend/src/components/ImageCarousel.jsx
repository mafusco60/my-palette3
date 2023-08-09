import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from './Loader';
import Message from './Message';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const ImageCarousel = () => {
	console.log('ImageCarousel');
	//const { data: products } = useGetProductsQuery();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};

		fetchProducts();
	}, []);
	// console.log('products', products);

	return (
		<>
			<>
				<Carousel
					pause='hover'
					fade='true'
					indicators='true'
					controls='true'
					className={'carousel-container carousel-fade'}
				>
					{products.map((product) => (
						<Carousel.Item key={product._id}>
							<Link to={`/products/${product._id}`}>
								<Image
									src={product.image}
									alt={product.name}
									className={
										product.portrait
											? 'carousel-image'
											: 'carousel-image-landscape'
									}
								/>
							</Link>
						</Carousel.Item>
					))}
				</Carousel>
			</>
		</>
	);
};

export default ImageCarousel;
