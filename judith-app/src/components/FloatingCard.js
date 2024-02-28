import React from 'react';
import styled from 'styled-components';
import MyStyledButton from './MyStyledButton';

export default function FloatingCard({ onClick }) {
	return (
		<FloatingCardContainer>
			<MyStyledButton onClick={onClick}>Close window</MyStyledButton>
		</FloatingCardContainer>
	);
}

// Temporary CSS for a test info card
const FloatingCardContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #ffffff;
	padding: 20px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
