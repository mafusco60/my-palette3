import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useAuthMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
//import { toast } from 'react-toastify';

const LoginScreen = () => {
	return (
		<>
			<h1>Login Screen</h1>
		</>
	);
};
export default LoginScreen;
