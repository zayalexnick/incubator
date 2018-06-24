import styled from 'styled-components';
import is from 'styled-is';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin: ${ props => props.indent ? `0 ${-props.indent}px` : '0 -15px' };
  
  > * {
    padding: ${ props => props.indent ? `0 ${props.indent}px` : '0 15px' };
  }
`;

export const Col = styled.div`
  width: 100%;
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.xs })
  {
    width: ${ props => 100 * props.xs }%;
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.sm })
  {
    width: ${ props => 100 * props.sm }%;
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.md })
  {
    width: ${ props => 100 * props.md }%;
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.lg })
  {
    width: ${ props => 100 * props.lg }%;
  }
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.xl })
  {
    width: ${ props => 100 * props.xl }%;
  }
`;