import styled from 'styled-components';
import { Router as RouterComponent } from '@reach/router';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  background: ${ props => props.theme.colors.background };
`;

export const Router = styled(RouterComponent)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;