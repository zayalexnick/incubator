import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.h2`
  display: flex;
  align-items: center;
  
  margin: 20px 0;
  
  font-size: ${ rem('22px') };
  
  border-left: 3px solid ${ props => props.theme.colors.black };
  
  &:after {
    content: '';
  
    flex: 1;
    
    height: 1px;
    background: ${ props => props.theme.colors.black };
  }
  
  span {
    padding: 10px 16px;
  }
`;