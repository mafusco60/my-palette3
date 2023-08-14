import React from 'react';
import { useGetAboutMeQuery } from '../slices/aboutMeApiSlice';
import Loader from './Loader';
import Message from './Message';


const AboutMe = () => {

	const { data: aboutMe, isLoading, error } = useGetAboutMeQuery();
	console.log(aboutMe);
	return (
		<h2>hello</h2>
// aboutme.map((about) => (
// 	<div key={about._id}>
// 		{about.number}
// 		<p>{about.paragraph}</p>
// 	</div>
)

// {isLoading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
	
// <h2>Say something here</h2>)
// 	aboutMe.map((about) => ()
// 	)
// };
// ))
	
// 	)
};

export default AboutMe;


// {isLoading ? (
// 	<Loader />
// ) : error ? (
// 	<div>{error?.data?.message || error.error}</div>
// ) : (
// 	FAQs.map((FAQ) => (
// 		<Card key={FAQ._id}>
// 			<>
// 				<Card.Body className='faq-question-card'>
// 					<Card.Text className=' faq-question'>{FAQ.question}</Card.Text>
// 					<Card.Text className='faq-answer visible'>
// 						{FAQ.answer}
// 					</Card.Text>
// 				</Card.Body>
// 			</>
// 		</Card>
// 	))
// )}