import React from 'react';
import FAQs from '../components/FAQs';
import { Card } from 'react-bootstrap';

const FAQScreen = () => {
	return (
		<>
			<h1 className='screen-title'>FAQ's</h1>
			<Card className='faq-container'>
				<FAQs />
			</Card>
		</>
	);
};

export default FAQScreen;
