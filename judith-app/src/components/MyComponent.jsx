import React from 'react';

const MyComponent = () => {
	return (
		<div style={styles.container}>
			<button style={styles.buttonTopLeft}>Top Left Button</button>
			<button style={styles.buttonBottomLeft}>Bottom Left Button</button>
		</div>
	);
};

const styles = {
	container: {
		backgroundColor: 'lightblue',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '20px',
	},
	buttonTopLeft: {
		alignSelf: 'flex-start',
	},
	buttonBottomLeft: {
		alignSelf: 'flex-start',
	},
};

export default MyComponent;
