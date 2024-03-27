import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Styles from './Styles';
import Button from './components/Button';
import { StyledIcon } from './components/StyledIcon';
import FloatingCard from './components/FloatingCard'; //Does not currently work, we need to fix this
import HorizontalScroll from './components/HorizontalScroll';

function ImageColumn({ src, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        minWidth: isHovered ? '50vw' : '20vw',
        height: '100vh',
        marginRight: '10px',
        overflow: 'hidden',
        transition: 'all 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // zIndex: isHovered ? 1 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '100%',
          width: 'auto',
          objectFit: 'cover',
          filter: 'saturate(1.2)' 
        }}
      />
    </div>
  );
}

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => setShowInfo(!showInfo);

  // Convert vertical scrolling to horizontal scrolling for the HorizontalScroll component
  useEffect(() => {
    const horizontalScrollContainer = document.querySelector('div.horizontalScrollContainer');
    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      horizontalScrollContainer.scrollLeft += e.deltaY + e.deltaX;
    };

    horizontalScrollContainer.addEventListener('wheel', handleWheel);

    return () => horizontalScrollContainer.removeEventListener('wheel', handleWheel);
  }, []);


  //Buttons on top
  return (
    <ThemeProvider theme={Styles}>
      <GlobalStyles />
      <div className="App" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'fixed', zIndex: 1, top: '20px', left: '20px' }}>
          <Button onClick={toggleInfo}><StyledIcon /></Button>
        </div>
        <div style={{ position: 'fixed', zIndex: 1, bottom: '20px', left: '20px' }}>
          <Button link="https://www.etsy.com">Shop↗</Button>
        </div>
        {showInfo && <FloatingCard onClick={toggleInfo} style={{
          position: 'fixed',
          zIndex: 1050,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          height: 'auto'
        }} />}

        <div className="horizontalScrollContainer" style={{ display: 'flex', overflowX: 'auto', width: '100vw' }}>
          {[...Array(19)].map((_, index) => (
            <ImageColumn
              key={index}
              src={`${process.env.PUBLIC_URL}/img/j${index + 1}.jpeg`}
              alt={`Content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
