import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from './Loader';
import Message from './Message';

const ImageCarousel = () => {
	console.log('ImageCarousel');
	const { data: products, isLoading, err } = useGetProductsQuery();
	console.log('data image carousel', { products });

	return (
		<>
			{/* {isLoading ? (
				<Loader />
			) : err ? (
				<div>{err?.data?.message || err.error}</div>
			) : ( */}
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
			{/* )} */}
		</>
	);
};

export default ImageCarousel;
