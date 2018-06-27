import styled from 'styled-components';
import { rgba, rem, transitions } from 'polished';
import ResponsiveContainer from "~/components/ResponsiveContainer";

export const Background = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  
  background: url(${ props => props.image });
  background-size: cover;
  
  * {
    z-index: 2;
  }
  
  &:after {
    content: '';
  
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    background: ${ props => rgba(props.theme.colors.black, 0.4) };
    
    z-index: 1;
  }
`;

export const Form = styled(ResponsiveContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  
  margin-bottom: 20px;
  
  font-size: ${ rem('13px') };
  color: ${ props => props.theme.colors.white };
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;

  margin-top: 10px;
  padding: 10px 16px;
  
  color: ${ props => props.theme.colors.white };
  
  text-align: center;
  
  border: 1px solid ${ props => rgba(props.theme.colors.white, 0.5) };
  
  &:focus {
    border-color: ${ props => props.theme.colors.primary };
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 300px;
  
  padding: 16px;
  
  font-size: ${ rem('14px') };
  font-weight: 600;
  color: ${ props => props.theme.colors.black };
  
  text-align: center;
  
  background-color: ${ props => props.theme.colors.white };
  
  ${ props => transitions(`color ${props.theme.animation.speed}`, `background-color ${props.theme.animation.speed}`) };
  
  &:hover {
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.primary };
  }
`;