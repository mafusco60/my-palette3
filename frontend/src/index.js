import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import store from './store.js';
import reportWebVitals from './reportWebVitals';
//import { createRoot } from 'react-dom/client';
import './styles/bootstrap.custom.css';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import GalleryScreen from './screens/GalleryScreen';
import ContactScreen from './screens/ContactScreen';
import FAQScreen from './screens/FAQScreen';
import UserListScreen from './screens/admin/UserListScreen.jsx';
import UserEditScreen from './screens/admin/UserEditScreen.jsx';
import AboutMeScreen from './screens/AboutMeScreen';
import AboutMeEditScreen from './screens/admin/AboutMeEditScreen.jsx';
import ServicesScreen from './screens/ServicesScreen';

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
			<Route path='/products/:id' element={<ProductScreen />} />
			<Route path='/admin/userlist/' element={<UserListScreen />} />
			<Route path='/user/:id/edit' element={<UserEditScreen />} />
			<Route path='/aboutme/edit' element={<AboutMeEditScreen />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
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
