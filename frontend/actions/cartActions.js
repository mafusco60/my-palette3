import axios from 'axios';
import { CART_ADD_ITEM } from '../src/constants';

const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);
	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image[0],
			price: data.price,
			count: data.count,
		},
	});
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
