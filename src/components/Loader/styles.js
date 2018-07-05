import styled, { keyframes } from 'styled-components';

const LoaderAnimation = keyframes`
	0% {
		transform: rotate(0);
	}
	
	100% {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
	position: relative;
	
	flex: 1;
`;

export const Loader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	
	transform: translate(-50%, -50%);

	width: 100px;
	height: 100px;
	
	border: 6px solid transparent;
	border-bottom-color: ${ ({ theme }) => theme.colors.primary };
	border-radius: 50%;
	
	animation: ${ LoaderAnimation } 0.8s linear 0s infinite;
`;