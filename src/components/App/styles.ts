import styled from 'styled-components';
import { zNav } from '@/styles/vars';

export const App = styled.div`
  color: ${props => props.theme.default};
  background-color: ${props => props.theme.bg};
  height: 100%;
  min-height: 100vh;
`;

export const TopRight = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: ${zNav + 1};
`;
