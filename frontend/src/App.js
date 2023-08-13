import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Loader from './components/Loader';
import { Outlet } from 'react-router-dom';
import React from 'react';

const App = () => {
	return (
		<>
			<Header />
			<Body />

			<Outlet />

			<Footer />
		</>
	);
};
export default App;
