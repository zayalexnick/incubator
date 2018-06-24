import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.h2`
  display: flex;
  align-items: flex-end;
  
  margin-bottom: 20px;
  
  span {
    padding: 10px 16px;
    
    font-size: ${ rem('14px') };
    font-weight: 300;
    color: ${ props => props.theme.colors.white };
    
    background: ${ props => props.theme.colors.primary };
  }
  
  &:after {
    content: '';
    
    flex: 1;
    
    height: 1px;
    
    background: ${ props => props.theme.colors.primary };
  }
`;