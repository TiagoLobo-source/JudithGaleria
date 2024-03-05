// Styles.js

const Styles = {
	fontFamily: 'Inter, sans-serif',
	fontSize: '1em',
	lineHeight: '19px',

	textColor: 'white',
	secondaryTextColor: 'gray',

	infoCard: {
		backgroundColor: 'hsla(0, 0%, 8%, 1)',
		borderRadius: '0px 16px 16px 0px',
	},

	button: {
		fontWeight: '400',
		padding: '16px',
		margin: '10px',
		lineHeight: '19px',
		backgroundColor: 'hsl(0, 2%, 8%)',
		minHeight: '51px',
		minWidth: '51px',
		border: 'none',
		// borderRadius: '71% 29% 65% 35% / 37% 56% 44% 63% ',
		borderRadius: '40px',
		cursor: 'pointer',

		onHover: {
			opacity: '0.5',
			transition: '0.3s ease-in',
		},

		onActive: {
			backgroundColor: '#8000ff',
			opacity: '1',
		},
	},
	// ... other design system properties
};

export default Styles;
