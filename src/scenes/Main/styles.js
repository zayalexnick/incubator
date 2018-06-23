import styled from 'styled-components';
import { rgba, rem } from 'polished';
import ResponsiveContainer from "~/components/ResponsiveContainer";

export const Background = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  
  &:before, &:after {
    content: '';
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  &:before {   
    background: url(${ props => props.image });
    background-size: cover;
    
    z-index: -2;
  }
  
  &:after {
    content: '';
    
    background: ${ props => rgba(props.theme.colors.black, 0.4) };
    
    z-index: -1;
  }
`;

export const Welcome = styled(ResponsiveContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 400px;
  
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: ${ rem('20px') };
  font-weight: 300;
  color: ${ props => props.theme.colors.white };
`;