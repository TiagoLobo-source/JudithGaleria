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
	${({ align }) => (align ? alignStyles[align] : 'center')}
`;

// Currently accepted alignment parameters:
const alignStyles = {
	'top left': 'top: 0; left: 0;',
	'top right': 'top: 0; right: 0;',
	'bot left': 'bottom: 0; left: 0;',
	'bot right': 'bottom: 0; right: 0;',
	// 'top': 'top:0;',
	// 'bot': 'bottom: 0;',
	// 'left': "left: 0;",
	// 'right': "right: 0;",
	center: 'top: 50%; left: 50%;',
};
