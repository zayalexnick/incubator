import styled from 'styled-components';
import { rgba, rem, transitions } from 'polished';

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	
	width: 100%;
	max-width: 500px;
	
	margin: 30px auto;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	
	font-size: ${ rem('14px') };
	font-weight: 300;
	color: ${ ({ theme }) => theme.colors.black };
	margin-bottom: 30px;
`;

export const Input = styled.input`
	margin-top: 10px;
	padding: 10px 30px;
	
	font-size: ${ rem('18px') };
	color: ${ ({ theme }) => rgba(theme.colors.black, 0.5) };
	
	border: 1px solid ${ ({ theme }) => theme.colors.black };
	
	${ ({ theme }) => transitions(`box-shadow ${ theme.animation.speed }`) };
	
	&:focus {
		box-shadow: 0 0 10px ${ ({ theme }) => rgba(theme.colors.black, 0.1) };
	}
`;

export const Error = styled.div`
	margin-bottom: 30px;
	padding: 10px 30px;
	
	font-size: ${ rem('14px') };
	color: ${ ({ theme }) => theme.colors.white };
	
	background: ${ ({ theme }) => theme.colors.error };
`;