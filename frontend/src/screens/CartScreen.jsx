import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const addToCartHandler = async (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate('/auth?redirect=/shipping');
	};

	return (
		<Row>
			<Col md={8}>
				<h1 className='screen-title'>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message>
						Your cart is empty <Link to='/gallery'> Go Shopping </Link>
					</Message>
				) : (
					<ListGroup variant='flush' className='margin-25'>
						{cartItems.map((item) => (
							<ListGroup.Item key={item._id}>
								<Row>
									<Col md={2}>
										<Image
											src={item.image}
											alt={item.name}
											className={
												!item.portrait
													? 'fluid image-land-tiny'
													: 'fluid image-tiny'
											}
										/>
									</Col>
									<Col md={3}>
										<Link to={`/products/${item._id}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<Form.Control
											as='select'
											value={item.qty}
											onChange={(e) =>
												addToCartHandler(item, Number(e.target.value))
											}
										>
											{[...Array(item.count).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={2}>
										<Button
											type='button'
											variant='light'
											onClick={() => removeFromCartHandler(item._id)}
										>
											<FaTrash />
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			{cartItems.length > 0 ? (
				<Col md={4}>
					{/* <Card> */}
					<ListGroup variant='flush' className='margin-25'>
						<ListGroup.Item>
							<h2>
								Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
								items
							</h2>
							$
							{cartItems
								.reduce((acc, item) => acc + item.qty * item.price, 0)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type='button'
								className='btn-block'
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed To Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
					{/* </Card> */}
				</Col>
			) : (
				''
			)}
		</Row>
	);
};

export default CartScreen;
