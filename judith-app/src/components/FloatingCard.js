import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Aligner from './Aligner';

export default function FloatingCard({ onClick }) {
	return (
		<FloatingCardContainer>
			<Aligner align={'top left'}>
				<Button onClick={onClick}>X</Button>
			</Aligner>
			<Aligner align={'center'}>Text example</Aligner>
		</FloatingCardContainer>
	);
}

const FloatingCardContainer = styled.div`
	${({ theme }) => `
		background-color: ${theme.infoCard.backgroundColor};
		border-radius: ${theme.infoCard.borderRadius};
		color: white;
		position: absolute;
		height: 98%;
		width: 90%;
		top: 1%;
		left: -100%;
		padding: 20px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transition: left 0.5s ease-in-out;
		left: 0%;
		z-index: 2;

	`}
`;
