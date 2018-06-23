import styled from 'styled-components';
import is from 'styled-is';

export default styled.div`
  ${is('flex')`
    display: flex;
    align-items: flex-start;
  `};

  margin: 0 auto;
  padding: 0 15px;
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.xs }) {
    width: 100%;
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.sm }) {
    width: ${ props => props.theme.breakpoints.sm };
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.md }) {
    width: ${ props => props.theme.breakpoints.md };
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.lg }) {
    width: ${ props => props.theme.breakpoints.lg };
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.xl }) {
    width: ${ props => props.theme.breakpoints.xl };
  }
`;