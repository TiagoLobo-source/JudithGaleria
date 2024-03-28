import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Aligner from './Aligner';

export default function FloatingCard({ onClick, isShown }) {
	return (
		<FloatingCardContainer isShown={isShown}>
			<Aligner align={'top left: 1%;'}>
				<Button onClick={onClick}>X</Button>
			</Aligner>
			<Aligner align={'center'}>Text example</Aligner>
		</FloatingCardContainer>
	);
}

const FloatingCardContainer = styled.div`
	${({ theme, isShown }) => `
		background-color: ${theme.infoCard.backgroundColor};
		border-radius: ${theme.infoCard.borderRadius};
		color: white;
		position: absolute;
		height: 98%;
		width: 90%;
		top: 1%;
		padding: 20px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transition: left 0.5s cubic-bezier(0.8, 0.1, 1, 0.2);
		left: ${isShown ? '-1.9%' : '-100%'};
		z-index: 2;

	`}
`;
