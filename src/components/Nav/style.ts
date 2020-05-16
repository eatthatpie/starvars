import styled from 'styled-components';
import { zNav } from '@/styles/vars';

export const Context = styled.nav`
  transform: translateX(-100%);
  background-color: ${props => props.theme.bgVariant};
  position: fixed;
  min-height: 100%;
  width: 240px;
  left: 0;
  top: 0;
  z-index: ${zNav};
`;
