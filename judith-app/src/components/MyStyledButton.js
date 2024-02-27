import React from 'react';
import styled from 'styled-components';

export default function MyStyledButton({ onClick, link, children }) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
		// Redirect to the link if provided
		if (link) {
			window.location.href = link;
		}
	};

	return <MyButton onClick={handleClick}>{children}</MyButton>;
}

const MyButton = styled.button`
	font-family: 'Inter', sans-serif;
	font-size: 1em;
	color: hsl(360, 0%, 100%);
	font-weight: 400;
	padding: 16px;
	line-height: 19px;
	background-color: hsl(0, 2%, 8%);
	min-height: 51px;
	min-width: 51px;
	border-radius: 40px;
	border: none;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
		transition: 0.3s ease-in;
	}

	&:active {
		background-color: #8000ff;
		opacity: 1;
	}
`;
