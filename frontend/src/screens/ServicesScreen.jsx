import React from 'react';
import {  Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ServicesScreen = () => {
	return (
		<>
	<h2 className='screen-title'>Services</h2>;
<Row>
	{/* <Col sm={12} md={6} lg={3}> */}
<Card className="ml-2">
	<Card.Body>
		<Card.Title className='text-dk'>Commissions: </Card.Title>
			<Card.Text >
				<br/>Commissions are available for portraits, pets, landscapes and more.<br/><br/> Prices vary depending on size, medium and content.  <br/><br/>
				I work in both traditional art and digital art.<br/><br/> Check out the examples on this page and the artwork in the gallery. <br/><br/>If you see something you like in the gallery that has been sold, I can create a similar piece for you.<br/><br/> <Link to={'/contact'}className='text-dk'> Please contact me for more information.</Link>							


			</Card.Text>
		</Card.Body>
	</Card>
	{/* </Col> */}
	<Col sm={12} md={6} lg={3}>
	<Card className='ml-5'>
	<Card.Body>
		<Card.Title className='text-dk'>Pets</Card.Title>
		<Card.Img className='image-small img-fluid' src='\images\Kitten.jpg' alt='kitten'/>
		<Card.Text className=" ">Digital Painting</Card.Text>
			<Card.Img className='image-small'  src='\images\raccoon.jpg' alt='raccoon'/>
			<Card.Text className='truncate-text'>
				Digital Painting
			</Card.Text>
		</Card.Body>
	</Card>
	</Col>
	<Col sm={12} md={6} lg={3}>
	<Card className=''>
	<Card.Body>
		<Card.Title className='text-dk'>Portraits</Card.Title>
		<Card.Img className='image-small'  src='\images\Delighted.png' alt='Delighted'/>
		<Card.Text className='truncate-text'>Mixed Media on Paper</Card.Text>
		<Card.Img className='image-small'  src='\images\RedHeadPortrait.jpg' alt='Portrait'/>
			<Card.Text className='truncate-text'>
				Mixed Media on Canvas
			</Card.Text>
		</Card.Body>
	</Card>
	</Col>

	<Col sm={12} md={6} lg={3}>
	<Card>
	<Card.Body>
		<Card.Title className='text-dk'>Special Events</Card.Title>
		<Card.Img className='image-land-small'  src='\images\Proposal.jpg' alt='Proposal'/>
		<Card.Text className='truncate-text  '>Acrylic on Canvas Panel</Card.Text>
		<Card.Img className='image-land-small'  src='\images\White-Christmas.jpg' alt='White Christmas'/>
		<Card.Text className='truncate-text  '>Digital Painting</Card.Text>		
	</Card.Body>
	</Card>
	</Col>
	</Row>
</>
	)
};

export default ServicesScreen;
