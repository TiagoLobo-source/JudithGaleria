import React from "react";
import styled from "styled-components"

export default function Image({ index, src, alt }) {
    return(
        <Imag index={index} src={src} alt={alt} />  
    )
}

const Imag = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  filter: saturate(1.2);
`;