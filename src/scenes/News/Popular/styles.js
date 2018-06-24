import styled from 'styled-components';
import { rem, rgba, transitions } from 'polished';
import { Link as BrowserLink } from '@reach/router';

export const Container = styled(BrowserLink)`
  position: relative;
  
  display: flex;
  align-items: flex-start;
  
  overflow: hidden;
  
  object-fit: cover;
  
  margin-top: 20px;
  
  &:after {
    content: '';
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    background-color: ${ props => rgba(props.theme.colors.black, 0.8) };
    ${ props => transitions(`background-color ${props.theme.animation.speed}`) };
    
    @media screen and (min-width: ${ props => props.theme.breakpoints.md }) {
      background-color: ${ props => rgba(props.theme.colors.black, 0.3) };
        
      ${ props => transitions(`background-color ${props.theme.animation.speed}`) };
    }
    
  }
  
  &:hover {
    .content {
      transform: translateY(0);
      opacity: 1;
    }
    
    .image {
      transform: scale(1.2);
    }
    
    &:after {
      background-color: ${ props => rgba(props.theme.colors.black, 0.8) };
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  padding: 15px;
  
  z-index: 2;
  
  @media screen and (min-width: ${ props => props.theme.breakpoints.md }) {
    transform: translateY(20px);
    opacity: 0;
    
     ${ props => transitions(`transform ${props.theme.animation.speed}`, `opacity ${props.theme.animation.speed}`) };
  }
`;

export const Image = styled.div`
  width: 100%;
  
  padding-top: 56.25%;
  
  background: url(${ props => props.src });
  background-size: cover;
  
  ${ props => transitions(`transform ${props.theme.animation.speed}`) };
`;

export const Title = styled.h3`
  flex: 1;
  
  font-size: ${ rem('16px') };
  color: ${ props => props.theme.colors.white };
`;

export const Time = styled.div`
  margin-top: 10px;

  font-size: ${ rem('11px') };
  font-weight: 300;
  color: ${ props => rgba(props.theme.colors.white, 0.5) };
`;