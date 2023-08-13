import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Card, Row } from 'react-bootstrap';
import { useGetFAQsQuery } from '../slices/faqsApiSlice';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import ToggleIcon, { isOpen } from './ToggleIcon';
import Loader from './Loader';

const FAQs = () => {
	const { data: FAQs, isLoading, error } = useGetFAQsQuery();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error?.data?.message || error.error}</div>
			) : (
				FAQs.map((FAQ) => (
					<Card key={FAQ._id}>
						<>
							<Card.Body className='faq-question-card'>
								<Card.Text className=' faq-question'>{FAQ.question}</Card.Text>
								<Card.Text className='faq-answer visible'>
									{FAQ.answer}
								</Card.Text>
							</Card.Body>
						</>
					</Card>
				))
			)}
			;
		</>
	);
};

export default FAQs;
