import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  display: none;
  
  padding: 20px 0;
  
  font-size: ${ rem('12px') };
  font-weight: 700;
  color: ${ props => props.theme.colors.black };
  
  text-transform: uppercase;
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.md }) {
    display: flex;
  }
`;