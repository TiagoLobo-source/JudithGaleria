import React, { useEffect } from 'react';
import styled from "styled-components"
// import './HorizontalScroll.css'; 

export default function HorizontalScrol ({ children })  {

  // Convert vertical scrolling to horizontal scrolling for the HorizontalScroll component
  useEffect(() => {
    const horizontalScrollContainer = document.getElementById('horizontalscroll');
    const handleWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        horizontalScrollContainer.scrollLeft += e.deltaY + e.deltaX;
    };

    horizontalScrollContainer.addEventListener('wheel', handleWheel);

    return () => horizontalScrollContainer.removeEventListener('wheel', handleWheel);
  }, []);


  return (
    <HorizontalWrapper id={'horizontalscroll'} >
    {children}
  </HorizontalWrapper>
  )
};


const HorizontalWrapper = styled.div`
  display: flex;
  background-color: #151414;
  overflow-x: auto;
  width: 100vw; 
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
`