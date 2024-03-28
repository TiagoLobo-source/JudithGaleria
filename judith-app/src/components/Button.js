import React from 'react';
import styled from 'styled-components';

export default function Button({ link, onClick, children, zIndex = 0 }) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
		// Redirect to the link if provided
		if (link) {
			window.location.href = link;
		}
	};

	return <MyButton onClick={handleClick} zIndex={zIndex} >{children}</MyButton>;
}

const MyButton = styled.button`
	/* Destructuring the 'theme' object inherited from the themeProvider 
	in the props */
	${({ theme, zIndex }) => `
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize};
    line-height: ${theme.lineHeight};
    padding: ${theme.button.padding};
	  margin: ${theme.button.margin};
    min-height: ${theme.button.minHeight};
    min-width: ${theme.button.minWidth};
    background-color: ${theme.button.backgroundColor};
    border: ${theme.button.borderRadius};
    border-radius: ${theme.button.borderRadius};
    color: ${theme.textColor};
    cursor: ${theme.button.cursor};
    opacity: ${theme.button.opacity};
    ${zIndex ? `z-index: ${zIndex};` : ''}

    &:hover {
      opacity: ${theme.button.onHover.opacity};
      transition: ${theme.button.onHover.transition};
    }

    &:active {
      background-color: ${theme.button.onActive.backgroundColor};
      opacity: ${theme.button.onActive.opacity};
    }
  `}
`;
