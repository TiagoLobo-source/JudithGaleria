import React from 'react';
import styled from 'styled-components';

// A wrapper component to align any element to a
// fixed position on screen, Use to wrap elements you want to have
// a specific position and pass the position description as ex:
//
// <Aligner align={'top left'}>
//      {children}
// </Aligner>

export default function Aligner({ align, children }) {
	return <Wrapper align={align}>{children}</Wrapper>;
}

const Wrapper = styled.div`
	position: absolute;
	${({ align }) => {
        const positions = (align ? align.split(' ') : []);
        return positions.map(position => {
            if (alignStyles[position]) {
                return alignStyles[position];
            } else if (position.includes(':')) {
                return position + ';';
            } else {
                return '';
            }
        }).join('');
    }}
`;

// Currently accepted alignment parameters:
const alignStyles = {
	'top': 'top:0;',
	'bot': 'bottom: 0;',
	'left': "left: 0;",
	'right': "right: 0;",
	center: 'top: 50%; left: 50%;',
};
