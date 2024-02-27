// import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import designSystem from './designSystem';
// import Button from './components/Button';
import MyStyledButton from './components/MyStyledButton';
import { StyledIcon } from './components/StyledIcon';
import FloatingCard from './components/FloatingCard';

function App() {
	const [showInfo, setShowInfo] = React.useState(false);
	const shopLink = 'https://www.etsy.com';

	function toggleInfo() {
		setShowInfo((prev) => !prev);
	}

	return (
		<ThemeProvider theme={designSystem}>
			<div className="App">
				<MyStyledButton link={shopLink}> Shop↗ </MyStyledButton>
				<MyStyledButton onClick={toggleInfo}>
					<StyledIcon />
				</MyStyledButton>
				{showInfo && <FloatingCard onClick={toggleInfo} />}
			</div>
		</ThemeProvider>
	);
}

export default App;

/*"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },*/
