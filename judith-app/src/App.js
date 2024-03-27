import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Styles from './Styles';
import Button from './components/Button';
import { StyledIcon } from './components/StyledIcon';
import Aligner from './components/Aligner';
import FloatingCard from './components/FloatingCard';
import HorizontalScroll from './components/HorizontalScroll';
import ImageColumn from './components/ImageColumn';
import Image from './components/Image';




function App() {
	const [showInfo, setShowInfo] = React.useState(false);
	const shopLink = 'https://www.etsy.com';

	function toggleInfo() {
		setShowInfo((prev) => !prev);
	}

	return (
		<ThemeProvider theme={Styles}>
			<div className="App">
			<HorizontalScroll>
					{[...Array(19)].map((_, index) => (
					<ImageColumn 
						key={`column${index}`} 
						src={`${process.env.PUBLIC_URL}/img/j${index + 1}.jpeg`}
						alt={`Content ${index + 1}`}
					/>					
					))}
				</HorizontalScroll>
				<Aligner align={'bot left'}>
					<Button link={shopLink}> Shop↗ </Button>
				</Aligner>
				<Aligner align={'top left'}>
					<Button onClick={toggleInfo}>
						<StyledIcon />
					</Button>
				</Aligner>
				{showInfo && <FloatingCard onClick={toggleInfo} />}
			</div>
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
