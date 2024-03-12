import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Styles from './Styles';
import Button from './components/Button';
import { StyledIcon } from './components/StyledIcon';
import Aligner from './components/Aligner';
import FloatingCard from './components/FloatingCard';

function App() {
	const [showInfo, setShowInfo] = React.useState(false);
	const shopLink = 'https://www.etsy.com';

	function toggleInfo() {
		setShowInfo((prev) => !prev);
	}

	return (
		<ThemeProvider theme={Styles}>
			<div className="App">
				<Aligner align={'bot left'}>
					<Button link={shopLink}> Shop↗ </Button>
				</Aligner>
				<Aligner align={'top left'}>
					<Button onClick={toggleInfo}>
						<StyledIcon />
					</Button>
				</Aligner>
				<Aligner align={'top right'}>
					<Button onClick={toggleInfo}>Try me</Button>
				</Aligner>
				<Aligner align={'bot right'}>
					<Button>I'm A Button in a corner</Button>
				</Aligner>
				{showInfo && <FloatingCard onClick={toggleInfo} />}
			</div>

			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
