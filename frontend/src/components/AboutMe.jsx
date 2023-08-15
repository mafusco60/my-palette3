import React from 'react';
import { useGetAboutMeQuery } from '../slices/aboutMeApiSlice';
import Loader from './Loader';
import Message from './Message';


const AboutMe = () => {

	const { data: aboutMe, isLoading, error } = useGetAboutMeQuery();
	console.log(aboutMe);
	return (
		
		isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
				aboutMe.map((aboutMe) => ( 
					<div key={aboutMe._id}>
					<h4 className='desc-dk-txt-alt-about'> {aboutMe.paragraph}</h4>
</div>)
				))
				
				)}



export default AboutMe;