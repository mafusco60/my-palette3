import React from 'react';
import { useGetAboutMeQuery } from '../slices/aboutMeApiSlice';
import Loader from './Loader';
import Message from './Message';

const AboutMe = () => {
	const { data: aboutMe, isLoading, error } = useGetAboutMeQuery();
	// console.log(aboutMe);
	{
		aboutMe ? console.log(aboutMe[0].paragraph) : console.log('no data');
	}
	// sortedArray = aboutMe.sort((a, b) => a.number - b.number);
	return isLoading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		aboutMe.map((item) => (
			<div key={item.number}>
				<h4 className='desc-aboutme'>{item.paragraph}</h4>
			</div>
		))
	);
};

export default AboutMe;
