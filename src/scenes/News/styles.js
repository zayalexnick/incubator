import styled from 'styled-components';
import { rem, rgba, transitions } from 'polished';
import { Link } from '@reach/router';

export const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	
	margin-top: 30px;
`;

export const Item = styled(Link)`
	display: flex;
	flex-direction: column;
	
	width: 100%;
	
	margin-bottom: 30px;
	padding: 0 15px;
	
	text-decoration: none;
	
	@media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
		width: 50%;
	}
	
	@media screen and (min-width: ${ ({ theme }) => theme.breakpoints.xl }) {
		width: 33.33333%;
	}
	
	.image {
		overflow: hidden;
		
		img {
			display: block;
			
			width: 100%;
			height: auto;
			
			${ ({ theme }) => transitions(`transform ${ theme.animation.speed }`) };
		}
	}
	
	.category {
		margin: 10px 0;
	
		font-size: ${ rem('13px') };
		font-weight: 300;
		color: ${ ({ theme }) => rgba(theme.colors.black, 0.6) };
	}
	
	.title {
		margin-bottom: 20px;

		font-size: ${ rem('22px') };
		font-weight: 600;
		color: ${ ({ theme }) => theme.colors.black };
		line-height: 1.3;
		
		${ ({ theme }) => transitions(`color ${ theme.animation.speed }`) };
	}
	
	.description {
		font-size: ${ rem('15px') };
		font-weight: 400;
		color: ${ ({ theme }) => rgba(theme.colors.black, 0.6) };
	}
	
	&:hover {
		.image {
			img {
				transform: scale(1.3);
			}
		}
	
		.title {
			color: ${ ({ theme }) => theme.colors.primary };
		}
	}
`;