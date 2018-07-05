import styled from 'styled-components';
import is from 'styled-is';

export default styled.div`
  ${is('flex')`
    display: flex;
  `};
  
  ${is('start')`
  	justify-content: flex-start;
  	align-items: flex-start;
  `};
  
  ${is('center')`
  	justify-content: center;
  	align-items: center;
  `};
  
  flex: 1;
  
  width: 100%;

  margin: 0 auto;
  padding: 0 15px;
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.sm }) {
    max-width: ${ props => props.theme.breakpoints.sm };
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.md }) {
    max-width: ${ props => props.theme.breakpoints.md };
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.lg }) {
    max-width: ${ props => props.theme.breakpoints.lg };
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.xl }) {
    max-width: ${ props => props.theme.breakpoints.xl };
  }
`;