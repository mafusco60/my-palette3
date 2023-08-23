import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import store from './store.js';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import './styles/bootstrap.custom.css';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import ProductListScreen from './screens/admin/ProductListScreen.jsx';
import ProductEditScreen from './screens/admin/ProductEditScreen.jsx';
import GalleryScreen from './screens/GalleryScreen';
import ContactScreen from './screens/ContactScreen';
import FAQScreen from './screens/FAQScreen';
import FAQEditScreen from './screens/admin/FAQEditScreen.jsx';
import UserListScreen from './screens/admin/UserListScreen.jsx';
import UserEditScreen from './screens/admin/UserEditScreen.jsx';
import AboutMeScreen from './screens/AboutMeScreen';
import AboutMeEditScreen from './screens/admin/AboutMeEditScreen.jsx';
import ServicesScreen from './screens/ServicesScreen';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
import OrderListScreen from './screens/admin/OrderListScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import OrderScreen from './screens/OrderScreen.jsx';

import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';

import { createRoutesFromElements } from 'react-router-dom';
try {
	console.log('index.js');
} catch (error) {
	console.log('error index.js');
}
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />} />
			<Route path='/cart' element={<CartScreen />} />
			<Route path='/auth' element={<LoginScreen />} />
			<Route path='/gallery' element={<GalleryScreen />} />
			<Route path='/faqs/' element={<FAQScreen />} />
			<Route path='/aboutme/' element={<AboutMeScreen />} />
			<Route path='/services/' element={<ServicesScreen />} />
			<Route path='/contact/' element={<ContactScreen />} />
			<Route path='/register' element={<RegisterScreen />} />
			<Route path='/products/:id' element={<ProductScreen />} />
			{/* Registered users */}
			<Route path='' element={<PrivateRoute />}>
				<Route path='/profile' element={<ProfileScreen />} />
				<Route path='/shipping' element={<ShippingScreen />} />
				<Route path='/payment' element={<PaymentScreen />} />
				<Route path='/order/:id' element={<OrderScreen />} />
				<Route path='/placeorder' element={<PlaceOrderScreen />} />
			</Route>
			{/* Admin users */}
			<Route path='' element={<AdminRoute />}>
				<Route path='/faqs/edit' element={<FAQEditScreen />} />
				<Route path='/aboutme/edit' element={<AboutMeEditScreen />} />
				<Route path='/products/:id/edit' element={<ProductEditScreen />} />
				<Route path='/productlist/' element={<ProductListScreen />} />
				<Route path='/userlist/' element={<UserListScreen />} />
				<Route path='/users/:id/edit' element={<UserEditScreen />} />
				<Route path='/orderlist/' element={<OrderListScreen />} />
			</Route>
		</Route>
	)
);

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<PayPalScriptProvider deferLoading={true}>
					<RouterProvider router={router} />
				</PayPalScriptProvider>
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);

reportWebVitals();
