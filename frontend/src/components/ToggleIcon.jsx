import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const ToggleIcon = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<div>
			<button onClick={handleToggle}>
				{!isOpen ? <FaChevronDown /> : <FaTimes />}
			</button>
			{/* <span>{isOpen ? 'Times' : 'Chevron Down'}</span> */}
		</div>
	);
};

export default ToggleIcon;
