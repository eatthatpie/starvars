import styled from 'styled-components';

export const App = styled.div`
  color: ${props => props.theme.default};
  background-color: ${props => props.theme.bg};
  height: 100%;
`;

export const TopRight = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;
