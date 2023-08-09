import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: "Welcome To Mary Anne's Palette",
	description: 'We sell beautiful artwork',
	keywords: 'paintings, buy prints, artsy, art, buy art, buy paintings',
};

export default Meta;
