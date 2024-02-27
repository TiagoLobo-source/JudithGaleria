// StyledIcon.js
import styled from 'styled-components';
import { ReactComponent as InfoIcon } from '../info-icon.svg';

//wrap the SVG icon into a styled component to pass a child to other components
export const StyledIcon = styled(InfoIcon)`
	width: 16px;
	height: 16px;
	fill: none;
`;
