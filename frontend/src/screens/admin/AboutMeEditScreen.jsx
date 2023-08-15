import React from 'react';
import { Card } from 'react-bootstrap';
import AboutMe from '../../components/AboutMe';
import { useGetAboutMeQuery } from '../../slices/aboutMeApiSlice';

const AboutMeEditScreen = () => {
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
						<AboutMe />
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default AboutMeEditScreen;
