import styled from 'styled-components';
import { rem, transitions, rgba } from 'polished';
import { Link as BrowserLink } from '@reach/router';

export const Items = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Item = styled.article`
  display: flex;
  flex-direction: column;
`;

export const ImageLink = styled(BrowserLink)`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  margin: 10px 0;

  font-size: ${ rem('20px') };
  line-height: 1.3;
  
  a {
    color: ${ props => props.theme.colors.black };
    
    ${ props => transitions(`color ${props.theme.animation.speed}`) };
  
    text-decoration: none;
    
    &:hover {
      color: ${ props => props.theme.colors.primary };
    }
  }
`;

export const Time = styled.div`
  margin-bottom: 10px;
  
  font-size: ${ rem('13px') };
  color: ${ props => rgba(props.theme.colors.black, 0.5) };
`;

export const Description = styled.p`
  font-size: ${ rem('14px') };
  font-weight: 300;
  line-height: 1.5;
  color: ${ props => props.theme.colors.black };
`;