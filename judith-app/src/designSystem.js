// DesignSystem.js

const designSystem = {
	fontSize: '1em',
	colors: {
		text: 'white',
		secondary: 'gray',
	},

	button: {
		fontWeight: '400',
		padding: '16px',
		lineHeight: '19px',
		backgroundColor: 'hsl(0, 2%, 8%)',
		minHeight: '50px',
		minWidth: '50px',
		borderRadius: '40px',
		border: 'none',
		onHover: {
			opacity: '0.5',
			transition: '0.3s ease-in',
		},
	},
	// ... other design system properties
};

export default designSystem;
