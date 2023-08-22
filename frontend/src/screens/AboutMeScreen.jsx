import React from 'react';
import { Card } from 'react-bootstrap';
import AboutMe from '../components/AboutMe';

const AboutMeScreen = () => {
	console.log('AboutScreen');
	return (
		<>
			<h1 className='screen-title'>About The Artist</h1>

			<Card className='card-aboutme'>
				<Card.Img className='banner-image' src='/images/PainterPalette.jpeg' />

				<Card.Body className='text-wrap-container'>
					<Card.Img
						src='images/self.jpg'
						alt='Mary Anne Fusco'
						className='selfie'
					/>

					<AboutMe />
				</Card.Body>
			</Card>
		</>
	);
};

export default AboutMeScreen;
