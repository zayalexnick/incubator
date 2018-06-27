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
    
    background-color: ${ ({ theme }) => rgba(theme.colors.black, 0.8) };
    ${ ({ theme }) => transitions(`background-color ${theme.animation.speed}`) };
    
    @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
      background-color: ${ ({ theme }) => rgba(theme.colors.black, 0.3) };
        
      ${ ({ theme }) => transitions(`background-color ${theme.animation.speed}`) };
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
      background-color: ${ ({ theme }) => rgba(theme.colors.black, 0.8) };
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
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    transform: translateY(20px);
    opacity: 0;
    
     ${ ({ theme }) => transitions(`transform ${theme.animation.speed}`, `opacity ${theme.animation.speed}`) };
  }
`;

export const Image = styled.div`
  width: 100%;
  
  padding-top: 56.25%;
  
  background: url(${ ({ src }) => src });
  background-size: cover;
  
  ${ ({ theme }) => transitions(`transform ${theme.animation.speed}`) };
`;

export const Title = styled.h3`
  flex: 1;
  
  font-size: ${ rem('16px') };
  color: ${ ({ theme }) => theme.colors.white };
`;

export const Time = styled.div`
  margin-top: 10px;

  font-size: ${ rem('11px') };
  font-weight: 300;
  color: ${ ({ theme }) => rgba(theme.colors.white, 0.5) };
`;