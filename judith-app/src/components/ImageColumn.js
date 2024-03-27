import React from 'react';
import styled from "styled-components";
import Image from "./Image";


export default function ImageColumn({index, src, alt, children}) {
    const [isHovered, setIsHovered] = React.useState(false);

  
  
    return (
      <Column
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image index={index} src={src} alt={alt} />

      </Column>
    );
  }
  
  const Column = styled.div`
  min-width: ${(props) => (props.isHovered ? '50vw' : '20vw')};
  height: 100vh;
  margin-right: 10px;
  overflow: hidden;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;