import styled from 'styled-components';
import { rem } from 'polished';

export default styled.div`
	padding: 0 20px;
	
	font-size: ${ rem('15px') };
	font-weight: 500;
	color: ${ ({ theme }) => theme.colors.white };
	
	background: ${ ({ theme }) => theme.colors.black };
`;