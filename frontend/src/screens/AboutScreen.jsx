import React from 'react';
import { Card } from 'react-bootstrap';
import About from '../components/About';
import { useGetAboutMeQuery } from '../slices/aboutMeApiSlice';
const AboutScreen = () => {
	console.log('AboutScreen');
	return (
		<>
			<h1 className='screen-title'>About The Artist</h1>

			<Card className='custom-card-about'>
				<Card.Img className='banner-image' src='/images/PainterPalette.jpeg' />

				<Card.Body className='text-wrap-container'>
					<Card.Img
						src='images/self.jpg'
						alt='Mary Anne Fusco'
						className='selfie'
					/>

					<Card.Text className='desc-dk-txt-alt-about'>
						<About />
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default AboutScreen;
